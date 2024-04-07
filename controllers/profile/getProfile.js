import { handleError, isIDGood } from '../../middleware/utils/index.js';
import { getProfileFromDB } from './helpers/index.js';

/**
 * Get profile function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getProfile = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    res.status(200).json(await getProfileFromDB(id))
  } catch (error) {
    handleError(res, error)
  }
}
