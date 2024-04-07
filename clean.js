import 'dotenv-safe/config.js';
import { readdirSync } from 'fs';
import initMongo from './config/mongo.js';
import { removeExtensionFromFile } from './middleware/utils/index.js';
const modelsPath = `./models`

initMongo()

// Loop models path and loads every file as a model except index file
const models = readdirSync(modelsPath).filter((file) => {
    return removeExtensionFromFile(file) !== 'index'
})

const deleteModelFromDB = async (model) => {
    model = (await import(`./models/${model}`)).default;
    return await model.deleteMany({});
}

const clean = async () => {
    try {
        const promiseArray = models.map(
            async (model) => await deleteModelFromDB(model)
        )
        await Promise.all(promiseArray)
        console.log('Cleanup complete!')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

clean()
