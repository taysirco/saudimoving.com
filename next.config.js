/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://saudimoving.com'
  },
  experimental: {
    // تعطيل webpack cache مؤقتاً لحل المشكلة
    webpackBuildWorker: false
  }
}

module.exports = nextConfig 