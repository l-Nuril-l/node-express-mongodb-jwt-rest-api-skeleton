import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const verificationExists = async (id = '') => {
  try {
    const user = await User.findOne({
      verification: id,
      verified: false,
    });
    await itemNotFound(null, user, 'NOT_FOUND_OR_ALREADY_VERIFIED');
    return user;
  } catch (error) {
    throw error;
  }
};
