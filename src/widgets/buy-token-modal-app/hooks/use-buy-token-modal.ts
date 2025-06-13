import { useBuyStore } from '@/shared/lib/persistance';

export const useBuyTokenModal = () => {
  const {
    link,
    clearLinkPayment,
    isBuyTokenModalOpen,
    openBuyTokenModal,
    closeBuyTokenModal,
  } = useBuyStore();

  return {
    state: { isBuyTokenModalOpen, link },
    functions: { openBuyTokenModal, clearLinkPayment, closeBuyTokenModal },
  };
};
