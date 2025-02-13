import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Get meta data from page props or use defaults
  const meta = pageProps.meta || {
    title: 'نقل عفش - خدمات نقل الاثاث في المملكة العربية السعودية',
    description: 'خدمات نقل العفش في جميع مدن المملكة العربية السعودية بأفضل الأسعار وأعلى مستويات الجودة والأمان',
    keywords: ['نقل عفش', 'نقل اثاث', 'شركة نقل عفش', 'نقل عفش رخيص', 'افضل شركة نقل عفش'],
  }

  return (
    <Layout meta={meta}>
      <Component {...pageProps} />
    </Layout>
  )
} 