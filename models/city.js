import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const CitySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
CitySchema.plugin(mongoosePaginate)
export default model('City', CitySchema)
