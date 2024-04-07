import { handleError } from '../../middleware/utils/index.js';
import { checkPermissions } from './helpers/index.js';

/**
 * Roles authorization function called by route
 * @param {Array} roles - roles specified on the route
 */
export const roleAuthorization = (roles) => async (req, res, next) => {
  try {
    const data = {
      id: req.user._id,
      roles
    }
    await checkPermissions(data, next)
  } catch (error) {
    handleError(res, error)
  }
}
