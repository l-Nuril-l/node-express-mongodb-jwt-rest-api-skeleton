import express from 'express';
import passport from 'passport';
import trimRequest from 'trim-request';
import '../config/passport.js';
import { roleAuthorization } from '../controllers/auth/index.js';
import { changePassword, getProfile, updateProfile } from '../controllers/profile/index.js';
import { validateChangePassword, validateUpdateProfile } from '../controllers/profile/validators/index.js';
const router = express.Router()
const requireAuth = passport.authenticate('jwt', {
  session: false
})

/*
 * Profile routes
 */

/*
 * Get profile route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getProfile
)

/*
 * Update profile route
 */
router.patch(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateProfile,
  updateProfile
)

/*
 * Change password route
 */
router.post(
  '/changePassword',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateChangePassword,
  changePassword
)

export default router;
