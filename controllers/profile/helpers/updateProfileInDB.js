import { itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const updateProfileInDB = async (req = {}, id = '') => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      req,
      { new: true, runValidators: true, select: '-role -_id -updatedAt -createdAt' }
    );
    await itemNotFound(null, user, 'NOT_FOUND');
    return user;
  } catch (error) {
    throw error;
  }
};
