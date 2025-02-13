<<<<<<< HEAD
import mongoose from 'mongoose'

export interface INotification {
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: Date;
}

const notificationSchema = new mongoose.Schema<INotification>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['info', 'success', 'warning', 'error'],
    default: 'info'
  },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

export const Notification = mongoose.models.Notification || mongoose.model<INotification>('Notification', notificationSchema) 
=======
// حذف الملف لأنه غير مستخدم
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
