import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const isAuthenticated = !!req.nextauth.token
    const isAdminRoute = req.nextUrl.pathname.startsWith('/ads')
    const isAdmin = req.nextauth.token?.role === 'admin'

    if (isAdminRoute && !isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }

    if (isAdminRoute && !isAdmin) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: '/auth/signin',
    }
  }
)

export const config = {
  matcher: [
    '/ads/:path*'
  ]
} 