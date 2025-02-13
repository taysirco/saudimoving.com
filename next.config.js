/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
<<<<<<< HEAD
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://saudiamoving.com'
=======
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  },
  experimental: {
    // تعطيل webpack cache مؤقتاً لحل المشكلة
    webpackBuildWorker: false
<<<<<<< HEAD
  }
=======
  },
  // نزيل هذه الخيارات لأنها تتعارض مع API Routes
  // output: 'export',
  // images: {
  //   unoptimized: true
  // },
  // trailingSlash: true
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
}

module.exports = nextConfig 