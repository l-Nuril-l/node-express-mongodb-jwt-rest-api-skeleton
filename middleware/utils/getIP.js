import requestIp from 'request-ip';

/**
 * Gets IP from user
 * @param {*} req - request object
 */
export const getIP = (req) => requestIp.getClientIp(req)


