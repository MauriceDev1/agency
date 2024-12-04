'use client'
import React from 'react'
import { useTimeStore } from '@/store/timeStore'

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00', '20:00'
]

const Time = () => {
  const setSelectedTime = useTimeStore((state) => state.setSelectedTime)

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className="p-3 text-center border rounded-lg hover:bg-gray-100"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Time