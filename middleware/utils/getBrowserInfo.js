/**
 * Gets browser info from user
 * @param {*} req - request object
 */
export const getBrowserInfo = ({ headers }) => headers['user-agent']

