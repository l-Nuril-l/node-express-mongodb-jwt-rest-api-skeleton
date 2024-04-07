import { buildErrObject } from '../../../middleware/utils/index.js';
import HookahRoadmap from '../../../models/hookahRoadmapExists.js';

export const hookahRoadmapExistsExists = async (name = '') => {
  try {
    const item = await HookahRoadmap.findOne({ name });
    if (item) throw buildErrObject(422, 'HOOKAHROADMAP_ALREADY_EXISTS');
    return false;
  } catch (err) {
    throw buildErrObject(422, err.message);
  }
};
