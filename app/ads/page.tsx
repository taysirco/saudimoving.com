import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../api/auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
import AdminDashboard from '@/components/admin/AdminDashboard'

export default async function AdsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/api/auth/signin')
  }

  return <AdminDashboard />
} 