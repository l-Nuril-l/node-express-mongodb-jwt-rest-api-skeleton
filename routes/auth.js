import { Router } from 'express';
import passport from 'passport';
import { all } from 'trim-request';
import '../config/passport.js';
const router = Router()
const requireAuth = passport.authenticate('jwt', {
  session: false
})

import { forgotPassword, getRefreshToken, login, register, resetPassword, roleAuthorization, verify } from '../controllers/auth/index.js';

import { validateForgotPassword, validateLogin, validateRegister, validateResetPassword, validateVerify } from '../controllers/auth/validators/index.js';

/*
 * Auth routes
 */

/*
 * Register route
 */
router.post('/register', all, validateRegister, register)

/*
 * Verify route
 */
router.post('/verify', all, validateVerify, verify)

/*
 * Forgot password route
 */
router.post('/forgot', all, validateForgotPassword, forgotPassword)

/*
 * Reset password route
 */
router.post('/reset', all, validateResetPassword, resetPassword)

/*
 * Get new refresh token
 */
router.get(
  '/token',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  all,
  getRefreshToken
)

/*
 * Login route
 */
router.post('/login', all, validateLogin, login)

export default router
