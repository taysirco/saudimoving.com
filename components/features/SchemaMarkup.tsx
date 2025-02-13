<<<<<<< HEAD
 
=======
'use client'

import { SITE_CONFIG } from '@/lib/utils/constants'

interface SchemaMarkupProps {
  city?: string
  service?: string
}

export default function SchemaMarkup({ city, service }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: city || 'المملكة العربية السعودية'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136',
      longitude: '46.6753'
    },
    areaServed: {
      '@type': 'Country',
      name: 'المملكة العربية السعودية'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
