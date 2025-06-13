import { create } from 'zustand';

export interface ModalsState {
  isStepsDrawerOpen: boolean;
  setIsStepsDrawerOpen: (isStepsDrawerOpen: boolean) => void;
}

export const useModalsStore = create<ModalsState>((set) => ({
  isStepsDrawerOpen: false,
  setIsStepsDrawerOpen: (isStepsDrawerOpen) => set({ isStepsDrawerOpen }),
}));
