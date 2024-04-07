import { checkQueryString, getItems } from '../../middleware/db/index.js';
import { handleError } from '../../middleware/utils/index.js';
import HookahRoadmap from '../../models/hookahRoadmapExists.js';

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getHookahRoadmaps = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, HookahRoadmap, query))
  } catch (error) {
    handleError(res, error)
  }
}
