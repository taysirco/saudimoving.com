import { cities, keywords } from '@/lib/utils/data'
import { arabicToSlug } from '@/lib/utils/text'

export default async function sitemap() {
<<<<<<< HEAD
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com'
=======
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saudiamoving.com'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

  // الصفحات الثابتة
  const staticPages = [
    '',
<<<<<<< HEAD
    '/services',
    '/contact',
    '/about',
    '/privacy-policy',
=======
    '/about',
    '/contact',
    '/services',
    '/cities',
    '/calculator',
    '/privacy',
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    '/terms'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
<<<<<<< HEAD
    priority: route === '' ? 1 : 0.8
=======
    priority: route === '' ? 1.0 : 0.8
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }))

  // صفحات المدن
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/${arabicToSlug(city)}`,
    lastModified: new Date().toISOString(),
<<<<<<< HEAD
    changeFrequency: 'weekly',
    priority: 0.8
=======
    changeFrequency: 'daily',
    priority: 0.9
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }))

  // صفحات الخدمات في كل مدينة
  const servicePages = cities.flatMap(city => 
    keywords.map(service => ({
      url: `${baseUrl}/${arabicToSlug(city)}/${arabicToSlug(service)}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    }))
  )

  return [...staticPages, ...cityPages, ...servicePages]
} 