
import { create } from 'zustand'

interface GenderState {
  selectedGender: string
  setSelectedGender: (gender: string) => void
}

export const useGenderStore = create<GenderState>((set) => ({
  selectedGender: 'Gender',
  setSelectedGender: (gender: string) => set({ selectedGender: gender })
}))