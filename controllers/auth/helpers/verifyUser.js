import { buildErrObject } from '../../../middleware/utils/index.js';

export const verifyUser = async (user = {}) => {
  try {
    user.verified = true;
    await user.save();
    return {
      email: user.email,
      verified: user.verified,
    };
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
};
