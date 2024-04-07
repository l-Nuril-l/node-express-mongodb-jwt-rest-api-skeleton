import express from 'express';
import passport from 'passport';
import trimRequest from 'trim-request';
import '../config/passport.js';
import { roleAuthorization } from '../controllers/auth/index.js';
import { createCity, deleteCity, getAllCities, getCities, getCity, updateCity } from '../controllers/cities/index.js';
const router = express.Router()
const requireAuth = passport.authenticate('jwt', {
  session: false
})

import {
  validateCreateCity,
  validateDeleteCity,
  validateGetCity,
  validateUpdateCity,
} from '../controllers/cities/validators/index.js';

/*
 * Cities routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllCities)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getCities
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateCity,
  createCity
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetCity,
  getCity
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateCity,
  updateCity
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteCity,
  deleteCity
)

export default router;
