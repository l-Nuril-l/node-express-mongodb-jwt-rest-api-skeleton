import { matchedData } from 'express-validator';
import { createItem } from '../../middleware/db/index.js';
import { handleError } from '../../middleware/utils/index.js';
import City from '../../models/city.js';
import { cityExists } from './helpers/index.js';

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const createCity = async (req, res) => {
  try {
    req = matchedData(req)
    const doesCityExists = await cityExists(req.name)
    if (!doesCityExists) {
      res.status(201).json(await createItem(req, City))
    }
  } catch (error) {
    handleError(res, error)
  }
}
