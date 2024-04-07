import 'dotenv-safe/config.js';
import { readdirSync } from 'fs';
import { Seeder } from 'mongo-seeding';
import { resolve } from 'path';

const config = {
    database: process.env.MONGO_URI,
    inputPath: resolve(import.meta.dirname, './data'),
    dropDatabase: false
}

const seeder = new Seeder(config)

const readCollectionsFromPath = (path) => {
    const collections = readdirSync(path);
    return Promise.all(
        collections
            .map(async (item) => {
                const folderName = item.split('.');
                const firstFile = readdirSync(resolve(path, item))[0];
                const documentsImport = (await (import(`./data/${item}/${firstFile}`))).default;
                const documents = Array.isArray(documentsImport) ? documentsImport : [];
                return {
                    documents,
                    name: folderName[1],
                    orderNo: folderName[0],
                };
            })
    );
}

// const collections = seeder.readCollectionsFromPath(config.inputPath) //mongo-seeding v5 required (now v4 2024)
// const collections = [{ documents: users, name: 'users', orderNo: 1 }];

const main = async () => {
    try {
        const collections = await readCollectionsFromPath(config.inputPath);
        await seeder.import(collections)
        console.log('Seed complete!')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

main()
