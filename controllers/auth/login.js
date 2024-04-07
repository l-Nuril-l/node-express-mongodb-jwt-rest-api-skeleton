import { matchedData } from 'express-validator';

import {
  checkLoginAttemptsAndBlockExpires,
  findUser,
  passwordsDoNotMatch,
  saveLoginAttemptsToDB,
  saveUserAccessAndReturnToken,
  userIsBlocked,
} from './helpers/index.js';

import { checkPassword } from '../../middleware/auth/index.js';
import { handleError } from '../../middleware/utils/index.js';

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const login = async (req, res) => {
  try {
    const data = matchedData(req)
    const user = await findUser(data.email)
    await userIsBlocked(user)
    await checkLoginAttemptsAndBlockExpires(user)
    const isPasswordMatch = await checkPassword(data.password, user)
    if (!isPasswordMatch) {
      handleError(res, await passwordsDoNotMatch(user))
    } else {
      // all ok, register access and return token
      user.loginAttempts = 0
      await saveLoginAttemptsToDB(user)
      res.status(200).json(await saveUserAccessAndReturnToken(req, user))
    }
  } catch (error) {
    handleError(res, error)
  }
}
