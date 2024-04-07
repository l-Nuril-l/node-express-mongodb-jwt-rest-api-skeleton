import { v4 as uuidv4 } from 'uuid';
import { buildErrObject, getBrowserInfo, getCountry, getIP } from '../../../middleware/utils/index.js';
import ForgotPassword from '../../../models/forgotPassword.js';

export const saveForgotPassword = async (req = {}) => {
  try {
    const forgot = new ForgotPassword({
      email: req.body.email,
      verification: uuidv4(),
      ipRequest: getIP(req),
      browserRequest: getBrowserInfo(req),
      countryRequest: getCountry(req)
    });
    const item = await forgot.save();
    return item;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
