import { buildErrObject } from '../../../middleware/utils/index.js';
import Hookah from '../../../models/hookah.js';

/**
 * Gets all items from database
 */
export const getAllItemsFromDB = () => {
  return Hookah.find(
    {},
    '-updatedAt -createdAt',
    {
      sort: {
        name: 1
      }
    }).catch(err => reject(buildErrObject(422, err.message)))
}
