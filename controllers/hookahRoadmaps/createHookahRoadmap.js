import { matchedData } from 'express-validator';
import { createItem } from '../../middleware/db/index.js';
import { handleError } from '../../middleware/utils/index.js';
import HookahRoadmap from '../../models/hookahRoadmapExists.js';
import { hookahRoadmapExistsExists } from './helpers/index.js';

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const createHookahRoadmap = async (req, res) => {
  try {
    req = matchedData(req)
    const doesHookahRoadmapExists = await hookahRoadmapExistsExists(req.name)
    if (!doesHookahRoadmapExists) {
      res.status(201).json(await createItem(req, HookahRoadmap))
    }
  } catch (error) {
    handleError(res, error)
  }
}
