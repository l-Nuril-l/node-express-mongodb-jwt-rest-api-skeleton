import { matchedData } from 'express-validator';
import { getItem } from '../../middleware/db/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import HookahRoadmap from '../../models/hookahRoadmapExists.js';

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const getHookahRoadmap = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await getItem(id, HookahRoadmap))
  } catch (error) {
    handleError(res, error)
  }
}
