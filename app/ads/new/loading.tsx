export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      <p className="mt-4 text-gray-600">جاري التحميل...</p>
    </div>
  )
} 