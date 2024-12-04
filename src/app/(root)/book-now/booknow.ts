'use client'
import { useAreaStore } from '@/store/areaStore'
import { useGenderStore } from '@/store/genderStore'
import { useTimeStore } from '@/store/timeStore'
import { useDurationStore } from '@/store/durationStore'

const Links = () => {
  const selectedArea = useAreaStore((state) => state.selectedArea)
  const selectedGender = useGenderStore((state) => state.selectedGender)
  const selectedTime = useTimeStore((state) => state.selectedTime)
  const selectedDuration = useDurationStore((state) => state.selectedDuration)
  
  return [
    {
      id: 1,
      name: selectedArea,
      link: "/book-now/area",
    },
    {
      id: 2,
      name: selectedDuration,
      link: "/book-now/duration"
    },
    {
      id: 3,
      name: selectedGender,
      link: "/book-now/gender"
    },
    {
      id: 4,
      name: selectedTime,
      link: "/book-now/time"
    },
  ]
}

export default Links