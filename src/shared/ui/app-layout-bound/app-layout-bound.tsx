// import { MixPanelProvider } from '@/app/providers/app-mix-panel';
import { type ReactNode, useEffect } from 'react';

import { Box, type BoxProps } from '@chakra-ui/react';
import { useLocation } from '@tanstack/react-router';

import { BuyTokenModalApp } from '@/widgets/buy-token-modal-app';
import { SuccessModalApp } from '@/widgets/success-modal-app';

import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';
import { setLocalStorage } from '@/shared/lib/local-storage';

import { AppCelebration } from '../app-celebration';

interface AppLayoutBoundProps extends BoxProps {
  children: ReactNode;
}

export const AppLayoutBound = ({ children, ...props }: AppLayoutBoundProps) => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const linkRef = searchParams.get(LOCAL_STORAGE_CONSTANTS.LINK_REF);

    if (linkRef) {
      setLocalStorage(LOCAL_STORAGE_CONSTANTS.LINK_REF, linkRef);
    }
  }, [location.search]);

  return (
    // <MixPanelProvider>
    <>
      <Box maxW="600px" mx="auto" px={5} {...props}>
        {children}
      </Box>
      <BuyTokenModalApp />
      <SuccessModalApp />
      <AppCelebration />
    </>
    // </MixPanelProvider>
  );
};
