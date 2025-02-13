'use client'

import { useState, useEffect } from 'react'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'

interface City {
  _id: string
  name: string
  nameEn: string
  isActive: boolean
}

export default function CitiesManager() {
  const [cities, setCities] = useState<City[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCity, setEditingCity] = useState<City | null>(null)

  useEffect(() => {
    fetchCities()
  }, [])

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities')
      const data = await response.json()
      setCities(data)
    } catch (error) {
      console.error('Error fetching cities:', error)
      toast.error('حدث خطأ أثناء جلب المدن')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const cityData = {
      name: formData.get('name'),
      nameEn: formData.get('nameEn'),
      isActive: formData.get('isActive') === 'on'
    }

    try {
      const response = await fetch(
        editingCity ? `/api/cities/${editingCity._id}` : '/api/cities',
        {
          method: editingCity ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cityData)
        }
      )

      if (!response.ok) throw new Error('Failed to save city')

      toast.success(editingCity ? 'تم تحديث المدينة بنجاح' : 'تم إضافة المدينة بنجاح')
      setIsModalOpen(false)
      setEditingCity(null)
      fetchCities()
    } catch (error) {
      console.error('Error saving city:', error)
      toast.error('حدث خطأ أثناء حفظ المدينة')
    }
  }

  if (isLoading) return <div>جاري تحميل المدن...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">إدارة المدن</h2>
        <button
          onClick={() => {
            setEditingCity(null)
            setIsModalOpen(true)
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark"
        >
          <PlusIcon className="h-5 w-5 ml-2 -mr-1" />
          إضافة مدينة
        </button>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      اسم المدينة
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الاسم بالإنجليزية
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الحالة
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">تعديل</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cities.map((city) => (
                    <tr key={city._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {city.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {city.nameEn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          city.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {city.isActive ? 'نشط' : 'غير نشط'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2 rtl:space-x-reverse">
                          <button
                            onClick={() => {
                              setEditingCity(city)
                              setIsModalOpen(true)
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <PencilIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">
              {editingCity ? 'تعديل المدينة' : 'إضافة مدينة جديدة'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  اسم المدينة
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingCity?.name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  الاسم بالإنجليزية
                </label>
                <input
                  type="text"
                  name="nameEn"
                  defaultValue={editingCity?.nameEn}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isActive"
                  defaultChecked={editingCity?.isActive ?? true}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label className="mr-2 block text-sm text-gray-900">
                  نشط
                </label>
              </div>
              <div className="flex justify-end space-x-2 rtl:space-x-reverse">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    setEditingCity(null)
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md"
                >
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 