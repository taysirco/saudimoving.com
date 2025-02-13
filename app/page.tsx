'use client'

import dynamic from 'next/dynamic'
import HomeFooter from '@/components/layout/HomeFooter'

const HomeHeader = dynamic(() => import('@/components/layout/HomeHeader'), {
  ssr: false
})
const QuickSearch = dynamic(() => import('@/components/features/QuickSearch'), {
  ssr: false
})
const PopularCities = dynamic(() => import('@/components/features/PopularCities'), {
  ssr: false
})
const HowItWorks = dynamic(() => import('@/components/features/HowItWorks'), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <QuickSearch />
      <PopularCities cities={[]} />
      <HowItWorks />
      <HomeFooter />
    </main>
  )
}