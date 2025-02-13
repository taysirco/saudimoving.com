export type MessageRole = 'user' | 'assistant'
export type BotStatus = 'idle' | 'thinking'

export interface Message {
  id: string
  role: MessageRole
  content: string
  timestamp: string
}

export interface ChatSession {
  id: string
  startTime: string
  endTime: string
  city: string
  service: string
  size: string
  customerMessages: string[]
  recommendedCompanies: string[]
  completed: boolean
} 