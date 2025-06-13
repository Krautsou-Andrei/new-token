import { Flex } from '@chakra-ui/react';

import { useProtected } from '@/features/auth/hook/use-protected';

import { AuthModalApp } from '@/widgets/auth-modal-app';
import { NavLayoutPanel } from '@/widgets/nav-layout/nav-layout-panel';

import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { BonusBannerApp } from './ui/bonus-banner-app';
import { BuyTokenApp } from './ui/buy-token-app';
import { EarnApp } from './ui/earn-app';
import { ProfileLineApp } from './ui/profile-line-app';

// import { SubscribeChannelApp } from './ui/subscribe-channel-app';

export const HomePage = () => {
  useProtected();
  return (
    // pb убрать после layout
    <AppLayoutBound py="20px" pb={'104px'}>
      <Flex direction="column" gap={{ base: '32px' }}>
        <ProfileLineApp />
        <BonusBannerApp />
        <EarnApp />
        {/* <ConnectWalletApp /> */}
        {/* <SubscribeChannelApp /> */}

        <BuyTokenApp />

        {/* Потом вынести в layout */}
        <NavLayoutPanel />
      </Flex>
      <AuthModalApp />
    </AppLayoutBound>
  );
};
