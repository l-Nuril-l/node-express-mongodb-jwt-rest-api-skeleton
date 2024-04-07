import { handleError } from '../../middleware/utils/index.js';
import { getAllItemsFromDB } from './helpers/index.js';

/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getAllHookahs = async (req, res) => {
  try {
    res.status(200).json(await getAllItemsFromDB())
  } catch (error) {
    handleError(res, error)
  }
}
