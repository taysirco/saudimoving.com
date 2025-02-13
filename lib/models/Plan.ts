import mongoose from 'mongoose'

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nameAr: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  features: [{
    type: String,
    required: true
  }],
  maxCities: {
    type: Number,
    required: true,
    default: 1
  },
  maxImages: {
    type: Number,
    required: true,
    default: 3
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isPopular: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export const Plan = mongoose.models.Plan || mongoose.model('Plan', planSchema) 