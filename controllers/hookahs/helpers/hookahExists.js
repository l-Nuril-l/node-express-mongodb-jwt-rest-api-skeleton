import { buildErrObject } from '../../../middleware/utils/index.js';
import Hookah from '../../../models/hookah.js';

export const hookahExists = async (name = '') => {
  try {
    const item = await Hookah.findOne({ name });
    if (item) throw buildErrObject(422, 'HOOKAH_ALREADY_EXISTS');
    return false;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
};
