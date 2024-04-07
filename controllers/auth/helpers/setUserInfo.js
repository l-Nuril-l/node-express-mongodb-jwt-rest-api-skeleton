export const setUserInfo = async (req = {}) => {
  const { _id, name, email, role, verified, verification } = req;
  const user = { _id, name, email, role, verified };
  if (process.env.NODE_ENV !== 'production') {
    user.verification = verification;
  }
  return user;
}
