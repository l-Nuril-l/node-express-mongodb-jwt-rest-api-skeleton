import { checkQueryString, getItems } from '../../middleware/db/index.js';
import { handleError } from '../../middleware/utils/index.js';
import City from '../../models/city.js';

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getCities = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, City, query))
  } catch (error) {
    handleError(res, error)
  }
}
