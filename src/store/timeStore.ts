import { create } from 'zustand'

interface TimeState {
  selectedTime: string
  setSelectedTime: (time: string) => void
}

export const useTimeStore = create<TimeState>((set) => ({
  selectedTime: 'Time',
  setSelectedTime: (time: string) => set({ selectedTime: time })
}))