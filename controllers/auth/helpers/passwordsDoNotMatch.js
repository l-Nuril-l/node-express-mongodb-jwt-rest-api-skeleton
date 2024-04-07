import { buildErrObject } from '../../../middleware/utils/index.js';
import { blockUser } from './blockUser.js';
import { saveLoginAttemptsToDB } from './saveLoginAttemptsToDB.js';
const LOGIN_ATTEMPTS = 5

export const passwordsDoNotMatch = async (user = {}) => {
  try {
    user.loginAttempts += 1;
    await saveLoginAttemptsToDB(user);

    if (user.loginAttempts <= LOGIN_ATTEMPTS) {
      throw buildErrObject(409, 'WRONG_PASSWORD');
    }

    return await blockUser(user);
  } catch (error) {
    throw error;
  }
};
