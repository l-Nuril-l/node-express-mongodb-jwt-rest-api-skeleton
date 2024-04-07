import i18n from 'i18n';
import { prepareToSendEmail } from './prepareToSendEmail.js';
const { __, setLocale } = i18n;
/**
 * Sends reset password email
 * @param {string} locale - locale
 * @param {Object} user - user object
 */
export const sendResetPasswordEmailMessage = (locale = '', user = {}) => {
  setLocale(locale)
  const subject = __('forgotPassword.SUBJECT')
  const htmlMessage = __(
    'forgotPassword.MESSAGE',
    user.email,
    process.env.FRONTEND_URL,
    user.verification
  )
  prepareToSendEmail(user, subject, htmlMessage)
}
