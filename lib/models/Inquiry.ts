import mongoose from 'mongoose'

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  city: { type: String, required: true },
  service: { type: String, required: true },
  message: String,
  ipAddress: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now }
})

export const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema) 