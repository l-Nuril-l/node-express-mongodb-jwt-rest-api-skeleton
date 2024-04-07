import { buildSuccObject, itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const changePasswordInDB = async (id = '', req = {}) => {
  try {
    const user = await User.findById(id, '+password');
    await itemNotFound(null, user, 'NOT_FOUND');

    // Assigns new password to user
    user.password = req.newPassword;

    // Saves in DB
    await user.save();
    return buildSuccObject('PASSWORD_CHANGED');
  } catch (error) {
    throw error;
  }
};
