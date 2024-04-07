import { buildErrObject } from '../../../middleware/utils/index.js';

export const saveLoginAttemptsToDB = async (user = {}) => {
  try {
    const result = await user.save();
    return true;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
