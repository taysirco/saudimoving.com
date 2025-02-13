'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const AdFormComplete = dynamic(() => import('./AdFormComplete'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2"></div>
    </div>
  )
})

interface AdFormWrapperProps {
  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
}

export default function AdFormWrapper({ onSubmit, isSubmitting }: AdFormWrapperProps) {
  return (
    <Suspense fallback={
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    }>
      <AdFormComplete
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </Suspense>
  )
} 