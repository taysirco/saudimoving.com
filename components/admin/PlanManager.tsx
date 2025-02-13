'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'
import PlanForm from './PlanForm'

interface Plan {
  _id: string
  name: string
  nameAr: string
  price: number
  duration: number
  features: string[]
  maxCities: number
  isFeatured: boolean
  maxImages: number
  isPopular?: boolean
}

export default function PlanManager() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null)

  useEffect(() => {
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/plans')
      const data = await response.json()
      setPlans(data)
    } catch (error) {
      console.error('Error fetching plans:', error)
      toast.error('حدث خطأ أثناء جلب الباقات')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSavePlan = async (data: Partial<Plan>) => {
    try {
      const response = await fetch(
        editingPlan ? `/api/plans/${editingPlan._id}` : '/api/plans',
        {
          method: editingPlan ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
      )

      if (!response.ok) throw new Error('Failed to save plan')

      toast.success(editingPlan ? 'تم تحديث الباقة بنجاح' : 'تم إضافة الباقة بنجاح')
      setIsModalOpen(false)
      setEditingPlan(null)
      fetchPlans()
    } catch (error) {
      console.error('Error saving plan:', error)
      toast.error('حدث خطأ أثناء حفظ الباقة')
    }
  }

  const handleDeletePlan = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الباقة؟')) return

    try {
      const response = await fetch(`/api/plans/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Failed to delete plan')

      toast.success('تم حذف الباقة بنجاح')
      fetchPlans()
    } catch (error) {
      console.error('Error deleting plan:', error)
      toast.error('حدث خطأ أثناء حذف الباقة')
    }
  }

  if (isLoading) return <div>جاري تحميل الباقات...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">إدارة الباقات</h2>
        <button
          onClick={() => {
            setEditingPlan(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark"
        >
          <PlusIcon className="h-5 w-5 ml-2 -mr-1" />
          إضافة باقة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <motion.div
            key={plan._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            {plan.isPopular && (
              <div className="bg-primary text-white text-center py-1 text-sm">
                الأكثر طلباً
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.nameAr}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500"> ريال / شهرياً</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => {
                    setEditingPlan(plan)
                    setIsModalOpen(true)
                  }}
                  className="p-2 text-gray-600 hover:text-primary"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeletePlan(plan._id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">
              {editingPlan ? 'تعديل الباقة' : 'إضافة باقة جديدة'}
            </h3>
            <PlanForm
              initialData={editingPlan}
              onSubmit={handleSavePlan}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
} 