import { buildErrObject } from './buildErrObject.js';

export const itemNotFound = async (err = {}, item = {}, message = 'NOT_FOUND') => {
  try {
    if (err) throw buildErrObject(422, err.message);
    if (!item) throw buildErrObject(404, message);
  } catch (error) {
    throw error;
  }
}
