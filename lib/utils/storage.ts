const STORAGE_PREFIX = 'saudimoving_'

export const StorageKeys = {
  LIKES: `${STORAGE_PREFIX}likes`,
  REPLIES: `${STORAGE_PREFIX}replies`,
  USER_PREFERENCES: `${STORAGE_PREFIX}preferences`,
  REVIEWS: `${STORAGE_PREFIX}reviews`,
  AUTH: `${STORAGE_PREFIX}auth`,
} as const

export interface StorageData {
  likes: Record<number, boolean>
  replies: Record<string, Reply[]>
  userPreferences: {
    theme?: 'light' | 'dark'
    fontSize?: 'small' | 'medium' | 'large'
  }
  auth: {
    lastLogin?: string
    userId?: string
  }
}

export function getStorageItem<K extends keyof StorageData>(key: K): StorageData[K] | null {
  try {
    const item = localStorage.getItem(StorageKeys[key])
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error reading ${key} from storage:`, error)
    return null
  }
}

export function setStorageItem<K extends keyof StorageData>(key: K, value: StorageData[K]): void {
  try {
    localStorage.setItem(StorageKeys[key], JSON.stringify(value))
  } catch (error) {
    console.error(`Error writing ${key} to storage:`, error)
  }
} 