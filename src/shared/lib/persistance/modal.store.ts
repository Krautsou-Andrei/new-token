import { create } from 'zustand';

interface Modal {
  heading: string;
  buttonText: string;
  buttonFunction: () => void;
  backText?: string;
  descriptions?: string;
  backFunction?: () => void;
}

export interface ModalState {
  modal: Modal | undefined;
  isConfety: boolean;
  isSuccessModal: boolean;
  isOpenModalByBIt: boolean;
  setIsConfety: (isConfety: boolean) => void;
  setSucceessModal: (modal: Modal) => void;
  openModalByBit: () => void;
  closeModalByBit: () => void;
  openSuccessModal: () => void;
  closeSuccessModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  link: undefined,
  isSuccessModal: false,
  isOpenModalByBIt: false,
  modal: undefined,
  isConfety: false,

  setIsConfety: (isConfety: boolean) => set({ isConfety: isConfety }),
  openSuccessModal: () => set({ isSuccessModal: true }),
  closeSuccessModal: () => set({ isSuccessModal: false, modal: undefined }),
  setSucceessModal: (modal: Modal) => set({ modal: modal }),
  clearSuccessmodal: () => set({ modal: undefined }),
  openModalByBit: () => set({ isOpenModalByBIt: true }),
  closeModalByBit: () => set({ isOpenModalByBIt: false }),
}));
