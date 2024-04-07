import jwt from 'jsonwebtoken';
import { decrypt } from '../../../middleware/auth/index.js';
import { buildErrObject } from '../../../middleware/utils/index.js';

export const getUserIdFromToken = async (token = '') => {
  try {
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(decrypt(token), process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          reject(buildErrObject(409, 'BAD_TOKEN'))
        } else {
          resolve(decoded);
        }
      });
    });
    return decoded.data._id;
  } catch (error) {
    throw error;
  }
}
