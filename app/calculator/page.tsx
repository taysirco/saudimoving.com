import { Metadata } from 'next'
import PriceCalculator from '@/components/features/PriceCalculator'
import Header from '@/components/layout/Header'
import HomeFooter from '@/components/layout/HomeFooter'

export const metadata: Metadata = {
  title: 'حاسبة تكلفة نقل العفش - احسب التكلفة التقريبية',
  description: 'احسب تكلفة نقل العفش بشكل تقريبي حسب المدينة والخدمة وحجم الأثاث والمسافة'
}

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">حاسبة تكلفة نقل العفش</h1>
          <p className="text-gray-600 text-center mb-8">
            احسب التكلفة التقريبية لنقل أثاثك بناءً على المدينة والخدمات المطلوبة وحجم الأثاث والمسافة
          </p>
          <PriceCalculator />
        </div>
      </main>
      <HomeFooter />
    </>
  )
} 