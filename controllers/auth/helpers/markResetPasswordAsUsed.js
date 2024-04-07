import { buildSuccObject, getBrowserInfo, getCountry, getIP, itemNotFound } from '../../../middleware/utils/index.js';

export const markResetPasswordAsUsed = async (req = {}, forgot = {}) => {
  try {
    forgot.used = true
    forgot.ipChanged = getIP(req)
    forgot.browserChanged = getBrowserInfo(req)
    forgot.countryChanged = getCountry(req)
    await forgot.save()
    await itemNotFound(null, forgot, 'NOT_FOUND')
    return buildSuccObject('PASSWORD_CHANGED')
  } catch (error) {
    throw error
  }
}
