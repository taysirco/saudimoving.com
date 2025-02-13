'use client'

import { motion } from 'framer-motion'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Message } from '@/types/chat'

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl p-4 ${
          isBot 
            ? 'bg-gray-100 rounded-tr-2xl' 
            : 'bg-primary text-white rounded-tl-2xl'
        }`}
      >
        <div className="flex items-start gap-3">
          {isBot && (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <img 
                src="/bot-avatar.png" 
                alt="Bot" 
                className="w-6 h-6"
              />
            </div>
          )}
          <div>
            <p className="text-sm">{message.content}</p>
            <span className="text-xs opacity-70 mt-1 block">
              {new Date(message.timestamp).toLocaleTimeString('ar-SA')}
            </span>
          </div>
          {!isBot && (
            <UserCircleIcon className="w-8 h-8 text-white" />
          )}
        </div>
      </div>
    </motion.div>
  )
} 