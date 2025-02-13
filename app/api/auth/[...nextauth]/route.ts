import NextAuth from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials?.password) {
            return null
          }

          // التحقق من صحة بيانات الدخول - بدون الحاجة لقاعدة البيانات
          if (
            credentials.username.trim() === 'adssaudimoving' &&
            credentials.password.trim() === 'ABMabm2122'
          ) {
            return {
              id: '1',
              name: 'Saudi Moving Ads',
              email: 'ads@saudimoving.sa',
              role: 'admin'
            }
          }

          return null
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 