import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const HookahSchema = new Schema(
    {
        region: {
            type: String,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
HookahSchema.plugin(mongoosePaginate)
export default model('Hookah', HookahSchema)