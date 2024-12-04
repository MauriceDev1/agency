import { create } from 'zustand'

interface DurationState {
  selectedDuration: string | number
  setSelectedDuration: (duration: number) => void
}

export const useDurationStore = create<DurationState>((set) => ({
  selectedDuration: 'Duration',
  setSelectedDuration: (duration: number) => 
    set({ selectedDuration: `${duration} hour${duration > 1 ? 's' : ''}` })
}))