import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أضف شركتك - انضم إلى أكبر دليل لشركات نقل العفش',
  description: 'سجل شركتك الآن واحصل على المزيد من العملاء. عروض خاصة للإعلان والتسويق لشركات نقل العفش.',
}

export default function AddCompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 