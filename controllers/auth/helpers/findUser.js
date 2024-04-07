import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const findUser = async (email = '') => {
  try {
    const item = await User.findOne({ email },
      'password loginAttempts blockExpires name email role verified verification');
    await itemNotFound(null, item, 'USER_DOES_NOT_EXIST');
    return item;
  } catch (error) {
    throw error;
  }
};
