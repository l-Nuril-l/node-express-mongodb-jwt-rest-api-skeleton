import { buildErrObject } from '../../middleware/utils/index.js';
import { cleanPaginationID } from './cleanPaginationID.js';
import { listInitOptions } from './listInitOptions.js';

export const getItems = async (req = {}, model = {}, query = {}) => {
  try {
    const options = await listInitOptions(req)
    const res = await model.paginate(query, options)
    return cleanPaginationID(res)
  } catch (err) {
    throw buildErrObject(422, err.message)
  }
}
