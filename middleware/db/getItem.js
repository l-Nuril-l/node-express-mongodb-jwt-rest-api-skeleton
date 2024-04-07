import { itemNotFound } from '../../middleware/utils/index.js';

export const getItem = async (id = '', model = {}) => {
  try {
    const item = await model.findById(id);
    await itemNotFound(null, item, 'NOT_FOUND');
    return item;
  } catch (error) {
    throw error;
  }
}
