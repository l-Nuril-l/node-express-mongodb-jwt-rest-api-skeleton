import { matchedData } from 'express-validator';
import { emailExists, sendRegistrationEmailMessage } from '../../middleware/emailer/index.js';
import { handleError } from '../../middleware/utils/index.js';
import { createItemInDb } from './helpers/index.js';

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const createUser = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    const locale = req.getLocale()
    req = matchedData(req)
    const doesEmailExists = await emailExists(req.email)
    if (!doesEmailExists) {
      const item = await createItemInDb(req)
      sendRegistrationEmailMessage(locale, item)
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}
