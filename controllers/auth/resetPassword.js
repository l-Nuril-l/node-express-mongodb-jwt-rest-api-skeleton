import { matchedData } from 'express-validator';

import {
  findForgotPassword,
  findUserToResetPassword,
  markResetPasswordAsUsed,
  updatePassword,
} from './helpers/index.js';

import { handleError } from '../../middleware/utils/index.js';

/**
 * Reset password function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const resetPassword = async (req, res) => {
  try {
    const data = matchedData(req)
    const forgotPassword = await findForgotPassword(data.id)
    const user = await findUserToResetPassword(forgotPassword.email)
    await updatePassword(data.password, user)
    const result = await markResetPasswordAsUsed(req, forgotPassword)
    res.status(200).json(result)
  } catch (error) {
    handleError(res, error)
  }
}
