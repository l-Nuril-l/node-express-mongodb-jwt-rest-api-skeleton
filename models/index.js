import * as fs from 'node:fs/promises';
import { removeExtensionFromFile } from '../middleware/utils/index.js';

export default async function loadModels() {
    const modelsPath = `${import.meta.dirname}/`

    const files = (await fs.readdir(modelsPath)).filter(async (file) => {
        // Take filename and remove last part (extension)
        const modelFile = removeExtensionFromFile(file)
        // Prevents loading of this file
        return modelFile !== 'index' ? (await import(`./${file}`)).default : ''
    })
}
