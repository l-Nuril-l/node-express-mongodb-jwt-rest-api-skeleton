import { genSalt as _genSalt, hash as _hash, compare } from 'bcrypt';
import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import validator from 'validator';
import { Roles } from '../enums/roles.js';

const { isEmail, isURL } = validator;
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            validate: {
                validator: isEmail,
                message: 'EMAIL_IS_NOT_VALID'
            },
            lowercase: true,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            enum: Roles,
            default: Roles.USER
        },
        verification: {
            type: String
        },
        verified: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        lastWork: {
            type: Date,
            required: false
        },
        urlTwitter: {
            type: String,
            validate: {
                validator(v) {
                    return v === '' ? true : isURL(v)
                },
                message: 'NOT_A_VALID_URL'
            },
            lowercase: true
        },
        urlGitHub: {
            type: String,
            validate: {
                validator(v) {
                    return v === '' ? true : isURL(v)
                },
                message: 'NOT_A_VALID_URL'
            },
            lowercase: true
        },
        loginAttempts: {
            type: Number,
            default: 0,
            select: false
        },
        blockExpires: {
            type: Date,
            default: Date.now,
            select: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const hash = (user, salt, next) => {
    _hash(user.password, salt, (error, newHash) => {
        if (error) {
            return next(error)
        }
        user.password = newHash
        return next()
    })
}

const genSalt = (user, SALT_FACTOR, next) => {
    _genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err)
        }
        return hash(user, salt, next)
    })
}

UserSchema.pre('save', function (next) {
    const that = this
    const SALT_FACTOR = 12
    if (!that.isModified('password')) {
        return next()
    }
    return genSalt(that, SALT_FACTOR, next)
})

UserSchema.methods.comparePassword = async function (passwordAttempt) {
    try {
        const isMatch = await compare(passwordAttempt, this.password)
        return isMatch
    } catch (err) {
        throw err
    }
}
UserSchema.plugin(mongoosePaginate)
export default model('User', UserSchema)