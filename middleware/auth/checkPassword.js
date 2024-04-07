import { buildErrObject } from '../../middleware/utils/index.js';

export const checkPassword = async (password = '', user = {}) => {
  try {
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return false;
    }
    return true;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
