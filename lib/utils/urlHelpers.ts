export function decodeArabicUrl(text: string): string {
  try {
    return decodeURIComponent(text.replace(/\+/g, ' '))
  } catch {
    return text
  }
}

export function encodeArabicUrl(text: string): string {
  try {
    return encodeURIComponent(text)
  } catch {
    return text
  }
} 