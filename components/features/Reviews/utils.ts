export const validateReviewContent = (content: string): { isValid: boolean; reason?: string } => {
  // قائمة الكلمات المحظورة
  const forbiddenWords = [
    'سيء', 'رديء', 'زبالة', 'خايس', 'نصاب', 'نصابين', 'حرامي', 'حرامية',
    'غشاش', 'فاشل', 'زفت', 'خرا', 'معفن', 'تعبان', 'مضيعة', 'نصب',
    // يمكن إضافة المزيد من الكلمات حسب الحاجة
  ]

  // التحقق من الكلمات المحظورة
  const hasForbiddenWord = forbiddenWords.some(word => 
    content.toLowerCase().includes(word.toLowerCase())
  )
  if (hasForbiddenWord) {
    return { isValid: false, reason: 'يحتوي التعليق على كلمات غير لائقة' }
  }

  // التحقق من وجود أرقام هواتف
  const phoneRegex = /(\+?[\d-]{8,})/
  if (phoneRegex.test(content)) {
    return { isValid: false, reason: 'لا يسمح بإضافة أرقام هواتف في التعليق' }
  }

  // التحقق من وجود روابط
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/
  if (urlRegex.test(content)) {
    return { isValid: false, reason: 'لا يسمح بإضافة روابط في التعليق' }
  }

  return { isValid: true }
} 