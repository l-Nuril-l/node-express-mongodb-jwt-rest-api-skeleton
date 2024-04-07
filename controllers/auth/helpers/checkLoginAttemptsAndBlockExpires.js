import { buildErrObject } from '../../../middleware/utils/index.js';
import { blockIsExpired } from './blockIsExpired.js';

export const checkLoginAttemptsAndBlockExpires = async (user = {}) => {
  try {
    if (await blockIsExpired(user)) {
      user.loginAttempts = 0;
      await user.save();
    }
    return true;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
