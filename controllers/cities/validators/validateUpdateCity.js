import { check } from 'express-validator';
import { validateResult } from '../../../middleware/utils/index.js';

/**
 * Validates update item request
 */
export const validateUpdateCity = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
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
