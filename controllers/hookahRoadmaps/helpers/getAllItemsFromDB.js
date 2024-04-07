import { buildErrObject } from '../../../middleware/utils/index.js';
import HookahRoadmap from '../../../models/hookahRoadmapExists.js';

/**
 * Gets all items from database
 */
export const getAllItemsFromDB = () => {
  return HookahRoadmap.find(
    {},
    '-updatedAt -createdAt',
    {
      sort: {
        name: 1
      }
    }).catch(err => reject(buildErrObject(422, err.message)))
}
