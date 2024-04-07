import { check } from 'express-validator';
import { validateResult } from '../../../middleware/utils/index.js';

/**
 * Validates get item request
 */
export const validateGetUser = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
