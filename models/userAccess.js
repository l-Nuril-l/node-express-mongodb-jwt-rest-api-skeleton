import { Schema, model } from 'mongoose';
import validator from 'validator';
const { isEmail } = validator;

const UserAccessSchema = new Schema(
  {
    email: {
      type: String,
      validate: {
        validator: isEmail,
        message: 'EMAIL_IS_NOT_VALID'
      },
      lowercase: true,
      required: true
    },
    ip: {
      type: String,
      required: true
    },
    browser: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
export default model('UserAccess', UserAccessSchema)
