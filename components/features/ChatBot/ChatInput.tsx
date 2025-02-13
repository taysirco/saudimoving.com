'use client'

import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { BotStatus } from '@/types/chat'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  status: BotStatus
}

export default function ChatInput({ onSendMessage, status }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && status === 'idle') {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t p-2 bg-white"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب رسالتك هنا..."
          className="flex-1 p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={status !== 'idle'}
        />
        <button
          type="submit"
          disabled={!message.trim() || status !== 'idle'}
          className="bg-primary text-white p-1.5 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          <PaperAirplaneIcon className="w-4 h-4" />
        </button>
      </div>
    </form>
  )
} 