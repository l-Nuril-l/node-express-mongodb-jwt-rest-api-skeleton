import { matchedData } from 'express-validator';
import { emailExists, sendRegistrationEmailMessage } from '../../middleware/emailer/index.js';
import { handleError } from '../../middleware/utils/index.js';
import { registerUser, returnRegisterToken, setUserInfo } from './helpers/index.js';

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const register = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    const locale = req.getLocale()
    req = matchedData(req)
    const doesEmailExists = await emailExists(req.email)
    if (!doesEmailExists) {
      const item = await registerUser(req)
      const userInfo = await setUserInfo(item)
      const response = await returnRegisterToken(item, userInfo)
      sendRegistrationEmailMessage(locale, item)
      res.status(201).json(response)
    }
  } catch (error) {
    handleError(res, error)
  }
}
