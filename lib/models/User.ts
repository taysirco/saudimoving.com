import mongoose from 'mongoose'

<<<<<<< HEAD
export interface IUser {
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema)
=======
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const User = mongoose.models.User || mongoose.model('User', userSchema) 
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
