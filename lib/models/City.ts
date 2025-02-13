import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  nameAr: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
})

export const City = mongoose.models.City || mongoose.model('City', citySchema) 