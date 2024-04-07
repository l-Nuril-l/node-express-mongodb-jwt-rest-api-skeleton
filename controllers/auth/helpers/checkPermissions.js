import { buildErrObject, itemNotFound } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const checkPermissions = async ({ id = '', roles = [] }, next) => {
  try {
    const user = await User.findById(id);
    await itemNotFound(null, user, 'USER_NOT_FOUND');
    if (roles.includes(user.role)) {
      return next();
    }
    throw buildErrObject(401, 'UNAUTHORIZED');
  } catch (error) {
    throw error;
  }
};
