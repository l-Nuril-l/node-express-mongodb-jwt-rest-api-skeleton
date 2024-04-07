import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const findUser = async (id = '') => {
  try {
    const user = await User.findById(id, 'password email');
    await itemNotFound(null, user, 'USER_DOES_NOT_EXIST');
    return user;
  } catch (error) {
    throw error;
  }
}
