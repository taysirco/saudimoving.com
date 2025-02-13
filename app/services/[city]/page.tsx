import { slugToArabic } from '@/lib/utils/data'
import { Metadata } from 'next'

interface Props {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityName = slugToArabic(params.city)
  return {
    title: `شركات نقل العفش في ${cityName}`,
    description: `أفضل شركات نقل العفش والأثاث في ${cityName} - خدمات فك وتركيب ونقل الأثاث بأسعار مناسبة`
  }
}
export default function CityServicesPage({ params }: { params: { city: string } }) {
  const cityName = slugToArabic(params.city)
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          شركات نقل العفش في {cityName}
        </h1>
        <div className="mb-8 text-center">
          <nav className="text-sm breadcrumbs">
            <a href="/" className="text-blue-600 hover:text-blue-800">الرئيسية</a>
            <span className="mx-2">{'>'}</span>
            <a href="/cities" className="text-blue-600 hover:text-blue-800">المدن</a>
            <span className="mx-2">{'>'}</span>
            <span>{cityName}</span>
          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* محتوى الشركات سيضاف هنا */}
        </div>
      </div>
    </div>
  )
} 