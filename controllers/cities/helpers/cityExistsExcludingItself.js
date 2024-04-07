import { buildErrObject } from '../../../middleware/utils/index.js';
import City from '../../../models/city.js';

export const cityExistsExcludingItself = async (id = '', name = '') => {
  try {
    const item = await City.findOne({
      name,
      _id: { $ne: id }
    });

    if (item) {
      throw buildErrObject(422, 'CITY_ALREADY_EXISTS');
    }

    return false;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
