import { Router } from 'express';
import fs from 'fs';
import { removeExtensionFromFile } from '../middleware/utils/index.js';
import authRouter from './auth.js';
const router = Router()
const routesPath = `${import.meta.dirname}/`

/*
 * Load routes statically and/or dynamically
 */
const initRoutes = async () => {
  // Load Auth route
  router.use('/', authRouter)

  // Loop routes path and loads every file as a route except this file and Auth route
  const files = fs.readdirSync(routesPath);
  for (const file of files) {
    if (file === 'index.js' || file === 'auth.js' || file === '.DS_Store') {
      continue;
    }

    // Take filename and remove last part (extension)
    const routeFile = removeExtensionFromFile(file);

    // Import and use the route dynamically
    try {
      const module = await import(`./${file}`);
      router.use(`/${routeFile}`, module.default);
    } catch (error) {
      console.error(`Error loading route ${routeFile}:`, error);
    };
  }

  /*
   * Setup routes for index
   */
  router.get('/', (req, res) => {
    res.send('Miyuli')
  })

  /*
   * Handle 404 error
   */
  router.use('*', (req, res) => {
    res.status(404).json({
      errors: {
        msg: 'URL_NOT_FOUND'
      }
    })
  })
}

initRoutes();

export default router
