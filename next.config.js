/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://saudimoving.com'
      : 'http://localhost:3000'
  },
  experimental: {
    // تعطيل webpack cache مؤقتاً لحل المشكلة
    webpackBuildWorker: false
  }
}

module.exports = nextConfig 