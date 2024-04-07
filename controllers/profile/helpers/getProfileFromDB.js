import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const getProfileFromDB = async (id = '') => {
  try {
    const user = await User.findById(id, '-_id -updatedAt -createdAt');
    await itemNotFound(null, user, 'NOT_FOUND');
    return user;
  } catch (error) {
    throw error;
  }
}
