import { itemNotFound } from '../../middleware/utils/index.js';

export const updateItem = async (id = '', model = {}, req = {}) => {
  try {
    const item = await model.findByIdAndUpdate(id, req, { new: true, runValidators: true });
    await itemNotFound(null, item, 'NOT_FOUND');
    return item;
  } catch (error) {
    throw error;
  }
}
