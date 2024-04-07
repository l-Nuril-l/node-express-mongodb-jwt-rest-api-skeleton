import { addHours } from 'date-fns';
const HOURS_TO_BLOCK = 2

import { buildErrObject } from '../../../middleware/utils/index.js';

export const blockUser = async (user = {}) => {
  try {
    const blockExpires = addHours(new Date(), HOURS_TO_BLOCK);
    user.blockExpires = blockExpires;
    await user.save();
    return buildErrObject(409, 'BLOCKED_USER');
  } catch (err) {
    return buildErrObject(422, err.message);
  }
}
