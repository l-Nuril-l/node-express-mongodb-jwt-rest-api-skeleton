import { buildErrObject, getBrowserInfo, getCountry, getIP } from '../../../middleware/utils/index.js';
import UserAccess from '../../../models/userAccess.js';
import { generateToken } from './generateToken.js';
import { setUserInfo } from './setUserInfo.js';

export const saveUserAccessAndReturnToken = async (req = {}, user = {}) => {
  try {
    const userAccess = new UserAccess({
      email: user.email,
      ip: getIP(req),
      browser: getBrowserInfo(req),
      country: getCountry(req)
    })
    await userAccess.save()
    const userInfo = await setUserInfo(user)
    return {
      token: generateToken(user._id),
      user: userInfo
    }
  } catch (err) {
    throw buildErrObject(422, err.message)
  }
}
