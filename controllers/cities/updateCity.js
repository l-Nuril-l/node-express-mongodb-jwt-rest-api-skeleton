import { matchedData } from 'express-validator';
import { updateItem } from '../../middleware/db/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import City from '../../models/city.js';
import { cityExistsExcludingItself } from './helpers/index.js';

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const updateCity = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesCityExists = await cityExistsExcludingItself(id, req.name)
    if (!doesCityExists) {
      res.status(200).json(await updateItem(id, City, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}
