import { matchedData } from 'express-validator';
import { checkPassword } from '../../middleware/auth/index.js';
import { buildErrObject, handleError, isIDGood } from '../../middleware/utils/index.js';
import { changePasswordInDB, findUser } from './helpers/index.js';

/**
 * Change password function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const changePassword = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    const user = await findUser(id)
    req = matchedData(req)
    const isPasswordMatch = await checkPassword(req.oldPassword, user)
    if (!isPasswordMatch) {
      return handleError(res, buildErrObject(409, 'WRONG_PASSWORD'))
    } else {
      // all ok, proceed to change password
      res.status(200).json(await changePasswordInDB(id, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}
