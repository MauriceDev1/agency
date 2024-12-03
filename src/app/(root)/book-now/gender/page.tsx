'use client'
import React from 'react'
import { useGenderStore } from '@/store/genderStore'

const genderOptions = [
  { id: 'male', name: 'Male' },
  { id: 'female', name: 'Female' },
  { id: 'other', name: 'Other' }
]

const Gender = () => {
  const setSelectedGender = useGenderStore((state) => state.setSelectedGender)

  const handleGenderSelect = (genderName: string) => {
    setSelectedGender(genderName)
  }

  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-2">
        {genderOptions.map((gender) => (
          <li
            key={gender.id}
            className="cursor-pointer text-gray-700 hover:text-gray-900"
            onClick={() => handleGenderSelect(gender.name)}
          >
            {gender.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gender