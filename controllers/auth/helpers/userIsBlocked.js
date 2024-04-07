import { buildErrObject } from '../../../middleware/utils/index.js';

export const userIsBlocked = async (user = {}) => {
  if (user.blockExpires > new Date()) {
    throw buildErrObject(409, 'BLOCKED_USER')
  }
  return true;
}
