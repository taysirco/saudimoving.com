'use client'

import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
<<<<<<< HEAD
import { 
  HomeIcon, PhoneIcon, MapPinIcon, TruckIcon, 
  WrenchIcon, UserGroupIcon, StarIcon, ClockIcon,
  ShieldCheckIcon, CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const availableIcons = {
  HomeIcon,
  PhoneIcon,
  MapPinIcon,
  TruckIcon,
  WrenchIcon,
  UserGroupIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
}

interface Icon {
  name: string
  color: string
}

interface IconSelectorProps {
  icons: Icon[]
  onAddIcon: (icon: Icon) => void
  onRemoveIcon: (index: number) => void
}

export default function IconSelector({ icons, onAddIcon, onRemoveIcon }: IconSelectorProps) {
  const [selectedIcon, setSelectedIcon] = useState('')
  const [iconColor, setIconColor] = useState('#000000')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleAddIcon = () => {
    if (selectedIcon) {
      onAddIcon({
        name: selectedIcon,
        color: iconColor
      })
      setSelectedIcon('')
    }
  }

  const renderIcon = (iconName: string) => {
    const IconComponent = availableIcons[iconName as keyof typeof availableIcons]
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null
=======
import {
  PhoneIcon,
  TruckIcon,
  HomeIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  // يمكنك إضافة المزيد من الأيقونات هنا
} from '@heroicons/react/24/outline'

const availableIcons = [
  { name: 'phone', component: PhoneIcon },
  { name: 'truck', component: TruckIcon },
  { name: 'home', component: HomeIcon },
  { name: 'building', component: BuildingOfficeIcon },
  { name: 'location', component: MapPinIcon },
]

interface IconSelectorProps {
  onSelect: (icon: { name: string; color: string }) => void
  selectedIcons: { name: string; color: string }[]
}

export default function IconSelector({ onSelect, selectedIcons }: IconSelectorProps) {
  const [selectedIcon, setSelectedIcon] = useState('')
  const [color, setColor] = useState('#000000')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleIconSelect = (iconName: string) => {
    setSelectedIcon(iconName)
    setShowColorPicker(true)
  }

  const handleColorSelect = (newColor: string) => {
    onSelect({ name: selectedIcon, color: newColor })
    setShowColorPicker(false)
    setSelectedIcon('')
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }

  return (
    <div className="space-y-4">
<<<<<<< HEAD
      <div className="flex flex-wrap gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 border rounded-lg"
            style={{ color: icon.color }}
          >
            {renderIcon(icon.name)}
            <button
              type="button"
              onClick={() => onRemoveIcon(index)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <select
          value={selectedIcon}
          onChange={(e) => setSelectedIcon(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        >
          <option value="">اختر أيقونة</option>
          {Object.keys(availableIcons).map(iconName => (
            <option key={iconName} value={iconName}>
              {iconName.replace('Icon', '')}
            </option>
          ))}
        </select>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 border rounded-lg w-20 h-10"
            style={{ backgroundColor: iconColor }}
          />
          {showColorPicker && (
            <div className="absolute z-10 mt-2">
              <div
                className="fixed inset-0"
                onClick={() => setShowColorPicker(false)}
              />
              <div className="relative">
                <HexColorPicker
                  color={iconColor}
                  onChange={setIconColor}
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddIcon}
          disabled={!selectedIcon}
          className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
        >
          إضافة
        </button>
      </div>
=======
      <div className="grid grid-cols-5 gap-4">
        {availableIcons.map((icon) => {
          const Icon = icon.component
          const isSelected = selectedIcons.some(si => si.name === icon.name)
          
          return (
            <button
              key={icon.name}
              onClick={() => handleIconSelect(icon.name)}
              className={`p-4 border rounded-lg hover:bg-gray-50 ${
                isSelected ? 'border-primary' : 'border-gray-200'
              }`}
              disabled={isSelected}
            >
              <Icon className="w-6 h-6" />
            </button>
          )
        })}
      </div>

      {showColorPicker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <HexColorPicker color={color} onChange={setColor} />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setShowColorPicker(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                إلغاء
              </button>
              <button
                onClick={() => handleColorSelect(color)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
              >
                اختيار
              </button>
            </div>
          </div>
        </div>
      )}
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    </div>
  )
} 