import express from 'express';
import passport from 'passport';
import trimRequest from 'trim-request';
import '../config/passport.js';
import { roleAuthorization } from '../controllers/auth/index.js';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users/index.js';
const router = express.Router()
const requireAuth = passport.authenticate('jwt', {
  session: false
})

import {
  validateCreateUser,
  validateDeleteUser,
  validateGetUser,
  validateUpdateUser,
} from '../controllers/users/validators/index.js';

/*
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getUsers
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateUser,
  createUser
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetUser,
  getUser
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateUser,
  updateUser
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

export default router;
