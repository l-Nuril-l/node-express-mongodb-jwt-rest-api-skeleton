import { v4 as uuidv4 } from 'uuid';
import { buildErrObject } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const registerUser = async (req = {}) => {
  try {
    const user = new User({
      name: req.name,
      email: req.email,
      password: req.password,
      verification: uuidv4()
    });
    const item = await user.save();
    return item;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
}
