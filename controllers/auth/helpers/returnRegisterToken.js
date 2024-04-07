import { generateToken } from './generateToken.js';

export const returnRegisterToken = async ({ _id = '', verification = '' } = {}, userInfo = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    userInfo.verification = verification
  }
  const data = {
    token: await generateToken(_id),
    user: userInfo
  }
  return data
}
