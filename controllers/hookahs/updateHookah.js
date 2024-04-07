import { matchedData } from 'express-validator';
import { updateItem } from '../../middleware/db/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import Hookah from '../../models/hookah.js';
import { hookahExistsExcludingItself } from './helpers/index.js';

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const updateHookah = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesHookahExists = await hookahExistsExcludingItself(id, req.name)
    if (!doesHookahExists) {
      res.status(200).json(await updateItem(id, Hookah, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}
