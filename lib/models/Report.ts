import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['ad', 'user', 'comment'],
    required: true
  },
  targetId: {
    type: String,
    required: true
  },
  reporterId: {
    type: String,
    required: true,
    ref: 'User'
  },
  reason: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'resolved', 'dismissed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

reportSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

export const Report = mongoose.models.Report || mongoose.model('Report', reportSchema) 