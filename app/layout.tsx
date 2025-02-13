import React from 'react'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import RootProvider from '@/components/providers/RootProvider'
import './globals.css'
import ChatBot from '@/components/ChatBot'
import { Toaster } from 'react-hot-toast'
<<<<<<< HEAD
=======
import { defaultMetadata } from './metadata'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

const font = Noto_Kufi_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
<<<<<<< HEAD
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://saudiamoving.com'),
  title: {
    default: 'نقل عفش - خدمات نقل الأثاث في المملكة العربية السعودية',
    template: '%s | نقل عفش'
  },
  description: 'خدمات نقل العفش والأثاث في جميع مدن المملكة العربية السعودية مع أفضل الشركات المرخصة',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'نقل عفش'
  }
=======
  ...defaultMetadata,
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
<<<<<<< HEAD
=======
      <head>
        <link rel="alternate" hrefLang="ar" href="https://saudiamoving.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
      <body className={font.className}>
        <RootProvider>
          {children}
          <ChatBot />
          <Toaster position="top-center" />
        </RootProvider>
      </body>
    </html>
  )
} 