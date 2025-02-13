'use client'

import { useState, useEffect, useRef } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sessionId = useRef(Date.now().toString())

  // التمرير التلقائي إلى آخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // رسالة الترحيب
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: 'مرحباً! أنا نقيل، مساعدك الشخصي لخدمات نقل العفش. كيف يمكنني مساعدتك اليوم؟',
          timestamp: new Date().toISOString()
        }
      ])
    }
  }, [])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim() || isLoading) return

    try {
      // إضافة رسالة المستخدم
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: message.trim(),
        timestamp: new Date().toISOString()
      }
      
      setMessages(prev => [...prev, userMessage])
      setMessage('')
      setIsLoading(true)

      // إرسال الرسالة للخادم
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId: sessionId.current
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      // إضافة رد البوت
      const botMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.reply,
        timestamp: data.timestamp
      }

      setMessages(prev => [...prev, botMessage])

    } catch (error) {
      // إضافة رسالة خطأ للمستخدم
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'عذراً، حدث خطأ في المحادثة. يرجى المحاولة مرة أخرى.',
        timestamp: new Date().toISOString()
      }
      
      setMessages(prev => [...prev, errorMessage])
      console.error('Chat error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* زر فتح المحادثة */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
        aria-label="فتح المحادثة"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </button>

      {/* نافذة المحادثة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-4 w-64 h-[400px] bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
          >
            {/* الهيدر */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">المساعد الذكي - نقيل</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-dark p-1 rounded transition-colors"
                aria-label="إغلاق المحادثة"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* منطقة الرسائل */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none p-3">
                    جاري الكتابة...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* نموذج الإدخال */}
            <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 