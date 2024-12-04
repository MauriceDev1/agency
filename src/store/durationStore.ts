
import { create } from 'zustand'

interface DurationState {
  selectedDuration: string
  setSelectedDuration: (duration: string) => void
}

export const useDurationStore = create<DurationState>((set) => ({
  selectedDuration: 'Duration',
  setSelectedDuration: (duration: string) => set({ selectedDuration: duration })
}))