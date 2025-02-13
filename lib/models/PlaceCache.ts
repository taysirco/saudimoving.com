import mongoose from 'mongoose'

// تعريف نموذج التخزين المؤقت
const placeCacheSchema = new mongoose.Schema({
  placeId: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
    expires: 15552000 // 6 months in seconds
  }
})

// إنشاء الفهرس على حقل lastUpdated للتحكم في مدة التخزين المؤقت
placeCacheSchema.index({ lastUpdated: 1 }, { expireAfterSeconds: 15552000 })

export const PlaceCache = mongoose.models.PlaceCache || mongoose.model('PlaceCache', placeCacheSchema) 