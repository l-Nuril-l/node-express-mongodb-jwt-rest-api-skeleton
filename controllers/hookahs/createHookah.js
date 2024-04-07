import { matchedData } from 'express-validator';
import { createItem } from '../../middleware/db/index.js';
import { handleError } from '../../middleware/utils/index.js';
import Hookah from '../../models/hookah.js';
import { hookahExists } from './helpers/index.js';

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const createHookah = async (req, res) => {
  try {
    req = matchedData(req)
    const doesHookahExists = await hookahExists(req.name)
    if (!doesHookahExists) {
      res.status(201).json(await createItem(req, Hookah))
    }
  } catch (error) {
    handleError(res, error)
  }
}
