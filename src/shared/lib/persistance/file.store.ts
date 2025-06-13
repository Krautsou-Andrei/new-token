import { create } from 'zustand';

interface LoadFile {
  fileName: string;
  link: string;
}

export interface FileState {
  loadLife: LoadFile | undefined;

  setLoadLife: (loadLife: LoadFile) => void;
  clearSuccessModal: () => void;
}

export const useFileStore = create<FileState>((set) => ({
  loadLife: undefined,

  setLoadLife: (loadLife: LoadFile) => set({ loadLife }),
  clearSuccessModal: () => set({ loadLife: undefined }),
}));
