import { itemNotFound } from '../../../middleware/utils/index.js';
import ForgotPassword from '../../../models/forgotPassword.js';

export const findForgotPassword = async (id = '') => {
  try {
    const item = await ForgotPassword.findOne({
      verification: id,
      used: false
    });
    await itemNotFound(null, item, 'NOT_FOUND_OR_ALREADY_USED');
    return item;
  } catch (error) {
    throw error;
  }
};
