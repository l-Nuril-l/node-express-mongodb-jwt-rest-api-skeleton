import { buildSuccObject, itemNotFound } from '../../middleware/utils/index.js';

export const deleteItem = async (id = '', model = {}) => {
  try {
    const item = await model.findByIdAndRemove(id).exec();
    await itemNotFound(null, item, 'NOT_FOUND');
    return buildSuccObject('DELETED');
  } catch (error) {
    throw error;
  }
}
