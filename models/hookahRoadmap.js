import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { HookahStatus } from '../enums/hookahStatus.js';

const HookahRoadmapSchema = new Schema(
    {
        status: {
            type: Number,
            required: true,
            default: HookahStatus.STOCK
        },
        hookahId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        courierId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        deliveredAt: {
            type: Date,
            required: false
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        returnedAt: {
            type: Date,
            required: false
        },
        completedAt: {
            type: Date,
            required: false
        },
        region: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
HookahRoadmapSchema.plugin(mongoosePaginate)
export default model('HookahRoadmap', HookahRoadmapSchema)