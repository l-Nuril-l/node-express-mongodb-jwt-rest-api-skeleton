import { validationResult } from 'express-validator';
import { buildErrObject } from './buildErrObject.js';
import { handleError } from './handleError.js';

/**
 * Builds error for validation files
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next object
 */
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    if (req.body.email) {
      req.body.email = req.body.email.toLowerCase()
    }
    return next()
  } catch (err) {
    return handleError(res, buildErrObject(422, err.array()))
  }
}