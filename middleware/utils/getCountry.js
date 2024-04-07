/**
 * Gets country from user using CloudFlare header 'cf-ipcountry'
 * @param {*} req - request object
 */
export const getCountry = ({ headers }) =>
  headers['cf-ipcountry'] ? headers['cf-ipcountry'] : 'XX'


