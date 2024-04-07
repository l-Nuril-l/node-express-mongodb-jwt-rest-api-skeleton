import { buildErrObject } from '../../../middleware/utils/index.js';
import City from '../../../models/city.js';

/**
 * Gets all items from database
 */
export const getAllItemsFromDB = () => {
  return City.find(
    {},
    '-updatedAt -createdAt',
    {
      sort: {
        name: 1
      }
    }).catch(err => reject(buildErrObject(422, err.message)))
}
