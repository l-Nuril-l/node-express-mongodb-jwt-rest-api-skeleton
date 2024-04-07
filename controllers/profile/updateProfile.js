import { matchedData } from 'express-validator';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import { updateProfileInDB } from './helpers/index.js';

/**
 * Update profile function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const updateProfile = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    req = matchedData(req)
    res.status(200).json(await updateProfileInDB(req, id))
  } catch (error) {
    handleError(res, error)
  }
}
