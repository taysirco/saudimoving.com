import mongoose from 'mongoose'

const advertisementSchema = new mongoose.Schema({
<<<<<<< HEAD
  imageUrl: {
    type: String,
    required: true
  },
=======
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  companyName: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  description: String,
  phoneNumber: String,
  whatsappNumber: String,
=======
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  cities: [{
    type: String,
    required: true
  }],
  services: [{
    type: String,
    required: true
  }],
<<<<<<< HEAD
  rating: {
    type: Number,
    default: 5
  },
  reviewsCount: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    default: 1
  },
  startDate: Date,
  endDate: Date,
  active: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  },
  icons: [{
    name: String,
    color: String
  }],
  animationSettings: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  plan: {
=======
  phoneNumber: {
    type: String,
    required: true
  },
  whatsappNumber: String,
  website: String,
  status: {
    type: String,
    enum: ['active', 'pending', 'expired', 'rejected'],
    default: 'pending'
  },
  planId: {
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
<<<<<<< HEAD
  planDetails: {
    name: String,
    nameAr: String,
    price: Number,
    duration: Number,
    features: [String],
    maxCities: Number,
    isFeatured: Boolean,
    maxImages: Number
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
=======
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  },
  views: {
    type: Number,
    default: 0
  },
  clicks: {
    type: Number,
    default: 0
<<<<<<< HEAD
  },
  whatsappClicks: {
    type: Number,
    default: 0
  },
  phoneClicks: {
    type: Number,
    default: 0
=======
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }
}, {
  timestamps: true
})

export const Advertisement = mongoose.models.Advertisement || mongoose.model('Advertisement', advertisementSchema) 