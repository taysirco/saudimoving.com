'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

interface AlertProps {
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  onClose: () => void
  action?: {
    label: string
    onClick: () => void
  }
  autoClose?: boolean
  duration?: number
}

export default function AdvancedAlert({
  title,
  message,
  type,
  onClose,
  action,
  autoClose = true,
  duration = 5000
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [autoClose, duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="w-6 h-6 text-green-400" />
      case 'error':
        return <XMarkIcon className="w-6 h-6 text-red-400" />
      case 'warning':
        return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
      case 'info':
        return <InformationCircleIcon className="w-6 h-6 text-blue-400" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200'
      case 'info':
        return 'bg-blue-50 border-blue-200'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 left-4 md:left-auto md:w-96 p-4 rounded-lg border ${getStyles()} shadow-lg z-50`}
        >
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            {getIcon()}
            <div className="flex-1">
              <h3 className="text-sm font-medium">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{message}</p>
              {action && (
                <button
                  onClick={action.onClick}
                  className="mt-2 text-sm font-medium text-primary hover:text-primary-dark"
                >
                  {action.label}
                </button>
              )}
            </div>
            <button
              onClick={() => {
                setIsVisible(false)
                setTimeout(onClose, 300)
              }}
              className="text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 