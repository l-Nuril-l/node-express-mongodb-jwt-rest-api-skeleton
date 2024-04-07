import { matchedData } from 'express-validator';
import { handleError } from '../../middleware/utils/index.js';
import { verificationExists, verifyUser } from './helpers/index.js';

/**
 * Verify function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
export const verify = async (req, res) => {
  try {
    req = matchedData(req)
    const user = await verificationExists(req.id)
    res.status(200).json(await verifyUser(user))
  } catch (error) {
    handleError(res, error)
  }
}
