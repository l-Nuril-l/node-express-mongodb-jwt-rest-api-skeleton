import { buildErrObject } from '../../middleware/utils/index.js';
import { buildSort } from './buildSort.js';

export const listInitOptions = async (req = {}) => {
  try {
    const order = req.query.order || -1
    const sort = req.query.sort || 'createdAt'
    const sortBy = buildSort(sort, order)
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 5
    const options = {
      sort: sortBy,
      lean: true,
      page,
      limit
    }
    return options
  } catch (error) {
    console.log(error.message)
    throw buildErrObject(422, 'ERROR_WITH_INIT_OPTIONS')
  }
}
