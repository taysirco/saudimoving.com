import { Metadata } from 'next'
import { cities, keywords, generateMetaTitle, generateMetaDescription } from '@/lib/utils/data'

interface PageProps {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = decodeURIComponent(params.city)
  const service = decodeURIComponent(params.service)

  return {
    title: generateMetaTitle(city, service),
    description: generateMetaDescription(city, service),
    openGraph: {
      title: generateMetaTitle(city, service),
      description: generateMetaDescription(city, service)
    }
  }
}

export async function generateStaticParams() {
  const paths = []
  for (const city of cities) {
    for (const service of keywords) {
      paths.push({
        city: encodeURIComponent(city),
        service: encodeURIComponent(service)
      })
    }
  }
  return paths
} 