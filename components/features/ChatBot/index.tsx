'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { Message, BotStatus } from '@/types/chat'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [status, setStatus] = useState<BotStatus>('idle')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sessionIdRef = useRef<string>(Date.now().toString())

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: 'مرحباً! كيف يمكنني مساعدتك في خدمات نقل العفش؟',
          timestamp: new Date().toISOString()
        }
      ])
    }
  }, [])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setStatus('thinking')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: content,
          sessionId: sessionIdRef.current
        })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.',
        timestamp: new Date().toISOString()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setStatus('idle')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
        aria-label="فتح المحادثة"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-4 w-80 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">المساعد الذكي</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-dark p-1 rounded transition-colors"
                aria-label="إغلاق المحادثة"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput onSendMessage={handleSendMessage} status={status} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 