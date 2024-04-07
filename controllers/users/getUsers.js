import { checkQueryString, getItems } from '../../middleware/db/index.js';
import { handleError } from '../../middleware/utils/index.js';
import User from '../../models/user.js';

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getUsers = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, User, query))
  } catch (error) {
    handleError(res, error)
  }
}
