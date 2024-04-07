import jwt from 'jsonwebtoken';
import { encrypt } from '../../../middleware/auth/index.js';

/**
 * Generates a token
 * @param {Object} user - user object
 */
export const generateToken = (user = '') => {
  try {
    // Gets expiration time
    const expiration =
      Math.floor(Date.now() / 1000) + 60 * process.env.JWT_EXPIRATION_IN_MINUTES

    // returns signed and encrypted token
    return encrypt(
      jwt.sign(
        {
          data: {
            _id: user
          },
          exp: expiration
        },
        process.env.JWT_SECRET
      )
    )
  } catch (error) {
    throw error
  }
}
