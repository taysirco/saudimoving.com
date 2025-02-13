'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface Ticket {
  _id: string
  title: string
  status: 'open' | 'closed'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
}

export default function SupportCenter() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    try {
      const response = await fetch('/api/support/tickets')
      const data = await response.json()
      setTickets(data)
    } catch (error) {
      console.error('Error fetching tickets:', error)
      toast.error('حدث خطأ أثناء جلب التذاكر')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div>جاري تحميل التذاكر...</div>

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">مركز الدعم</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {tickets.map((ticket) => (
            <li key={ticket._id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-primary truncate">
                    {ticket.title}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {ticket.status === 'open' ? 'مفتوحة' : 'مغلقة'}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className={`flex items-center text-sm text-gray-500
                      ${ticket.priority === 'high' ? 'text-red-600' : 
                        ticket.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'}`}>
                      الأولوية: {
                        ticket.priority === 'high' ? 'عالية' :
                        ticket.priority === 'medium' ? 'متوسطة' : 'منخفضة'
                      }
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {new Date(ticket.createdAt).toLocaleDateString('ar-SA')}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 