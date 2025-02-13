import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Meta from '@/components/common/Meta'
import { LayoutProps } from '@/types'

interface Props extends LayoutProps {
  meta?: {
    title: string
    description: string
    keywords: string[]
    ogImage?: string
  }
}

export default function Layout({ children, meta }: Props) {
  const defaultMeta = {
    title: 'نقل عفش - خدمات نقل الاثاث في المملكة العربية السعودية',
    description: 'خدمات نقل العفش في جميع مدن المملكة العربية السعودية بأفضل الأسعار وأعلى مستويات الجودة والأمان',
    keywords: ['نقل عفش', 'نقل اثاث', 'شركة نقل عفش', 'نقل عفش رخيص', 'افضل شركة نقل عفش'],
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Meta meta={meta || defaultMeta} />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
} 