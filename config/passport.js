import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { decrypt } from '../middleware/auth/index.js';
import User from '../models/user.js';

/**
 * Extracts token from: header, body or query
 * @param {Object} req - request object
 * @returns {string} token - decrypted token
 */

/**
 * Extracts a token from various sources in the request object and decrypts it.
 *
 * @param {Object} req - the request object containing headers, body, query, and handshake information
 * @return {string} the decrypted token if found, otherwise null
 */
const jwtExtractor = (req, e, n) => {
  const tokenSource = [
    req.headers?.authorization,
    req.body?.token,
    req.query?.token,
  ];

  const token = tokenSource
    .map((header) => header?.replace(/Bearer\s?/, '').trim())
    .find((token) => token !== null)
    ?.trim()

  return token ? decrypt(token) : token;
}

/**
 * Options object for jwt middlware
 */
const jwtOptions = {
  jwtFromRequest: jwtExtractor,
  secretOrKey: process.env.JWT_SECRET
}

/**
 * Login with JWT middleware
 */
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.data?._id);
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

passport.use(jwtLogin)
