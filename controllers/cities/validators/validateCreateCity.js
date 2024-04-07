import { check } from 'express-validator';
import { validateResult } from '../../../middleware/utils/index.js';

/**
 * Validates create new item request
 */
export const validateCreateCity = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
