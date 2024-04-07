import express from 'express';
import passport from 'passport';
import trimRequest from 'trim-request';
import '../config/passport.js';
import { roleAuthorization } from '../controllers/auth/index.js';
import { createHookah, deleteHookah, getAllHookahs, getHookah, getHookahs, updateHookah } from '../controllers/hookahs/index.js';
const router = express.Router()
const requireAuth = passport.authenticate('jwt', {
  session: false
})

import {
  validateCreateHookah,
  validateDeleteHookah,
  validateGetHookah,
  validateUpdateHookah,
} from '../controllers/hookahs/validators/index.js';

/*
 * Hookahs routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllHookahs)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getHookahs
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateHookah,
  createHookah
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetHookah,
  getHookah
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateHookah,
  updateHookah
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteHookah,
  deleteHookah
)

export default router;
