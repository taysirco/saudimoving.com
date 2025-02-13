'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Notification {
  _id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  createdAt: string
  isRead: boolean
}

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications')
      const data = await response.json()
      setNotifications(data)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const markAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'PATCH'
      })

      if (!response.ok) throw new Error('Failed to mark notification as read')

      setNotifications(notifications.map(notification => 
        notification._id === notificationId 
          ? { ...notification, isRead: true }
          : notification
      ))
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  const deleteNotification = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete notification')

      setNotifications(notifications.filter(n => n._id !== notificationId))
    } catch (error) {
      console.error('Error deleting notification:', error)
    }
  }

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200'
      default:
        return 'bg-blue-50 border-blue-200'
    }
  }

  if (isLoading) return <div>جاري تحميل الإشعارات...</div>

  const displayedNotifications = showAll 
    ? notifications 
    : notifications.filter(n => !n.isRead)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">مركز الإشعارات</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-primary hover:text-primary-dark"
        >
          {showAll ? 'عرض غير المقروءة فقط' : 'عرض الكل'}
        </button>
      </div>

      <AnimatePresence>
        {displayedNotifications.map((notification) => (
          <motion.div
            key={notification._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-4 rounded-lg border ${getNotificationStyle(notification.type)} relative`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                <span className="text-xs text-gray-500 mt-2 block">
                  {new Date(notification.createdAt).toLocaleString('ar-SA')}
                </span>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification._id)}
                    className="text-primary hover:text-primary-dark"
                  >
                    تحديد كمقروء
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification._id)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {displayedNotifications.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          لا توجد إشعارات {showAll ? '' : 'غير مقروءة'}
        </div>
      )}
    </div>
  )
} 