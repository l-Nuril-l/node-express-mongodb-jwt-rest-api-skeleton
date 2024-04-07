import { buildErrObject } from '../../middleware/utils/index.js';
import User from '../../models/user.js';

export const emailExists = async (email = '') => {
  try {
    const item = await User.findOne({ email });
    if (item) {
      throw buildErrObject(422, 'EMAIL_ALREADY_EXISTS');
    }
    return false;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
