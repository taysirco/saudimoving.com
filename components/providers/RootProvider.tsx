'use client'

import { ReactNode } from 'react'
import SessionProvider from './SessionProvider'

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
} 