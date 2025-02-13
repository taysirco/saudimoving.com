'use client'

import { useState, useEffect } from 'react'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'
import Link from 'next/link'

interface Advertisement {
  _id: string
  companyName: string
  status: string
  paymentStatus: string
  startDate: string
  endDate: string
  cities: string[]
}

export default function AdsList() {
  const [ads, setAds] = useState<Advertisement[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAds()
  }, [])

  const fetchAds = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/ads')
      if (!response.ok) {
        throw new Error('Failed to fetch ads')
      }
      const data = await response.json()
      setAds(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching ads:', error)
      setError('حدث خطأ أثناء جلب الإعلانات')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا الإعلان؟')) {
      return
    }

    try {
      const response = await fetch(`/api/ads/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete ad')
      }

      // تحديث القائمة بعد الحذف
      setAds(ads.filter(ad => ad._id !== id))
    } catch (error) {
      console.error('Error deleting ad:', error)
      alert('حدث خطأ أثناء حذف الإعلان')
    }
  }

  if (isLoading) return <div>جاري تحميل الإعلانات...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">قائمة الإعلانات</h2>
        <Link
          href="/ads/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <PlusIcon className="h-5 w-5 ml-2 -mr-1" />
          إضافة إعلان جديد
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      اسم الشركة
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الحالة
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      حالة الدفع
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      تاريخ البداية
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      تاريخ النهاية
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      المدن
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">تعديل</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ads.length > 0 ? (
                    ads.map((ad) => (
                      <tr key={ad._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {ad.companyName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            ad.status === 'active' ? 'bg-green-100 text-green-800' :
                            ad.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {ad.status === 'active' ? 'نشط' :
                             ad.status === 'paused' ? 'متوقف مؤقتاً' :
                             'متوقف'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            ad.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                            ad.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {ad.paymentStatus === 'paid' ? 'مدفوع' :
                             ad.paymentStatus === 'pending' ? 'معلق' :
                             'فشل'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(ad.startDate), 'dd/MM/yyyy', { locale: ar })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(ad.endDate), 'dd/MM/yyyy', { locale: ar })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ad.cities.join(', ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2 rtl:space-x-reverse">
                            <button
                              onClick={() => window.location.href = `/ads/${ad._id}/edit`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <PencilIcon className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(ad._id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                        لا توجد إعلانات
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 