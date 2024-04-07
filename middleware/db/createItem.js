import { buildErrObject } from '../../middleware/utils/index.js';

export const createItem = async (req = {}, model = {}) => {
  try {
    const item = await model.create(req);
    return item;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
