import { check } from 'express-validator';
import { validateResult } from '../../../middleware/utils/index.js';

/**
 * Validates forgot password request
 */
export const validateForgotPassword = [
  check('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
