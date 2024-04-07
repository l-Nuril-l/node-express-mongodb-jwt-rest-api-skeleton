import { itemNotFound } from '../../../middleware/utils/index.js';

export const updatePassword = async (password = '', user = {}) => {
  try {
    user.password = password
    const item = await user.save()
    await itemNotFound(null, item, 'NOT_FOUND')
    return item
  } catch (error) {
    throw error
  }
}
