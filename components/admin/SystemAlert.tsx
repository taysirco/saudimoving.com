'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Alert {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
}

interface SystemAlertProps {
  alert: Alert
  onClose: () => void
  autoClose?: boolean
  duration?: number
}

export default function SystemAlert({
  alert,
  onClose,
  autoClose = true,
  duration = 5000
}: SystemAlertProps) {
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

  const getAlertStyles = () => {
    switch (alert.type) {
      case 'success':
        return 'bg-green-50 text-green-800 border-green-400'
      case 'error':
        return 'bg-red-50 text-red-800 border-red-400'
      case 'warning':
        return 'bg-yellow-50 text-yellow-800 border-yellow-400'
      case 'info':
        return 'bg-blue-50 text-blue-800 border-blue-400'
      default:
        return 'bg-gray-50 text-gray-800 border-gray-400'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 left-4 md:left-auto md:w-96 p-4 rounded-lg border ${getAlertStyles()} shadow-lg z-50`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">{alert.message}</div>
            <button
              onClick={() => {
                setIsVisible(false)
                setTimeout(onClose, 300)
              }}
              className="ml-4 text-gray-400 hover:text-gray-500"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 