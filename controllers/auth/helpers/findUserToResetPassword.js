import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const findUserToResetPassword = async (email = '') => {
  try {
    const user = await User.findOne({ email });
    await itemNotFound(null, user, 'NOT_FOUND');
    return user;
  } catch (error) {
    throw error;
  }
};
