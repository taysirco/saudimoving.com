import mongoose from 'mongoose'

const settingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true
  },
  siteDescription: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  phoneNumber: String,
  whatsappNumber: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  },
  adSettings: {
    maxImagesPerAd: {
      type: Number,
      default: 5
    },
    maxDaysPerAd: {
      type: Number,
      default: 30
    },
    featuredAdPrice: {
      type: Number,
      default: 100
    }
  }
})

export const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema) 