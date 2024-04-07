import { matchedData } from 'express-validator'
import { sendResetPasswordEmailMessage } from '../../middleware/emailer/index.js'
import { handleError } from '../../middleware/utils/index.js'
import { findUser, forgotPasswordResponse, saveForgotPassword } from './helpers/index.js'

/**
 * Forgot password function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const forgotPassword = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    const locale = req.getLocale()
    const data = matchedData(req)
    await findUser(data.email)
    const item = await saveForgotPassword(req)
    sendResetPasswordEmailMessage(locale, item)
    res.status(200).json(forgotPasswordResponse(item))
  } catch (error) {
    handleError(res, error)
  }
}
