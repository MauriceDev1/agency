
import { create } from 'zustand'

interface AreaState {
  selectedArea: string
  setSelectedArea: (area: string) => void
}

interface SetSelectedArea {
    (area: string): void
}

export const useAreaStore = create<AreaState>((set) => ({
    selectedArea: 'Area',
    setSelectedArea: (area: string) => set({ selectedArea: area })
}))