import { matchedData } from 'express-validator';
import { deleteItem } from '../../middleware/db/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import model from '../../models/user.js';

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const deleteUser = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await deleteItem(id, model))
  } catch (error) {
    handleError(res, error)
  }
}
