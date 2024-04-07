import { v4 as uuidv4 } from 'uuid';
import { buildErrObject } from '../../../middleware/utils/index.js';
import User from '../../../models/user.js';

export const createItemInDb = async ({
  name = '',
  email = '',
  password = '',
  role = '',
  phone = '',
  city = '',
  country = ''
}) => {
  try {
    const verification = uuidv4();
    const user = new User({
      name,
      email,
      password,
      role,
      phone,
      city,
      country,
      verification
    });
    const item = await user.save();
    const { password: _, blockExpires, loginAttempts, ...rest } = item.toObject();
    return rest;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
};
