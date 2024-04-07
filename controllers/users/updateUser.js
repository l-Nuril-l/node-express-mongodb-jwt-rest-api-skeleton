import { matchedData } from 'express-validator';
import { updateItem } from '../../middleware/db/index.js';
import { emailExistsExcludingMyself } from '../../middleware/emailer/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import User from '../../models/user.js';

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const updateUser = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesEmailExists = await emailExistsExcludingMyself(id, req.email)
    if (!doesEmailExists) {
      res.status(200).json(await updateItem(id, User, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}
