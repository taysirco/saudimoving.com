'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

interface ImageUploadProps {
  onUpload: (url: string) => void
  defaultImage?: string
}

export default function ImageUpload({ onUpload, defaultImage }: ImageUploadProps) {
  const [preview, setPreview] = useState(defaultImage)
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setIsUploading(true)
      const file = acceptedFiles[0]
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      setPreview(data.url)
      onUpload(data.url)
    } catch (error) {
      console.error('Error uploading image:', error)
    } finally {
      setIsUploading(false)
    }
  }, [onUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'}
          ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative h-48 w-full">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div>
            {isDragActive ? (
              <p className="text-primary">أفلت الصورة هنا...</p>
            ) : (
              <p>اسحب وأفلت الصورة هنا، أو انقر للاختيار</p>
            )}
          </div>
        )}
      </div>
      {isUploading && (
        <p className="mt-2 text-sm text-gray-500">جاري رفع الصورة...</p>
      )}
    </div>
  )
} 