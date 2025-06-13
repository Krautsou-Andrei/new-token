import { create } from 'zustand';

export interface BuyState {
  isBuyTokenModalOpen: boolean;
  openBuyTokenModal: () => void;
  closeBuyTokenModal: () => void;
  setlinkPayment: (link: string) => void;
  clearLinkPayment: () => void;
  link?: string;
}

export const useBuyStore = create<BuyState>((set) => ({
  isBuyTokenModalOpen: false,
  link: undefined,

  openBuyTokenModal: () => set({ isBuyTokenModalOpen: true }),
  closeBuyTokenModal: () => set({ isBuyTokenModalOpen: false }),
  setlinkPayment: (link: string) => set({ link: link }),
  clearLinkPayment: () => set({ link: undefined }),
}));
