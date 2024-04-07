import { matchedData } from 'express-validator';
import { updateItem } from '../../middleware/db/index.js';
import { handleError, isIDGood } from '../../middleware/utils/index.js';
import HookahRoadmap from '../../models/hookahRoadmapExists.js';
import { hookahRoadmapExistsExistsExcludingItself } from './helpers/index.js';

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const updateHookahRoadmap = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesHookahRoadmapExists = await hookahRoadmapExistsExistsExcludingItself(id, req.name)
    if (!doesHookahRoadmapExists) {
      res.status(200).json(await updateItem(id, HookahRoadmap, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}
