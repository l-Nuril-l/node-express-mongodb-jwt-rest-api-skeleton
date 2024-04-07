import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const findUserById = async (userId = '') => {
  try {
    const item = await User.findById(userId).catch(err => { throw err; });
    await itemNotFound(null, item, 'USER_DOES_NOT_EXIST');
    return item;
  } catch (error) {
    throw error;
  }
}
