import { matchedData } from 'express-validator';
import { getItem } from '../../middleware/db/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import Hookah from '../../models/hookah.js';

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getHookah = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await getItem(id, Hookah))
  } catch (error) {
    handleError(res, error)
  }
}
