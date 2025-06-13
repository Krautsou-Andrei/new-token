import { useRef } from 'react';

import { Flex } from '@chakra-ui/react';

import { AuthModalApp } from '@/widgets/auth-modal-app';
import { FooterApp } from '@/widgets/footer-app';

import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { AlreadyTodayApp } from './already-today-app';
import { DigitalMarketApp } from './digital-market-app';
import { MechanicsApp } from './mechanics-app';
import { ModelApp } from './model-app';
import { PreSaleApp } from './pre-sale-app';
import { PreSaleOpenApp } from './pre-sale-open-app';
import { RiskApp } from './risk-app';
import { SupportApp } from './support-app';
import { TakePartApp } from './take-part-app';
import { TokenDemandApp } from './token-demand-app';
import { TokenLaunchApp } from './token-launch-app';
import { TokenomicApp } from './tokenomic-app';
import { UtilityApp } from './utility-app';
import { VideoApp } from './video-app';
import { WhatGivesTokenApp } from './what-gives-token-app';

export const InvestorPage = () => {
  const tokenRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppLayoutBound
      py="8"
      pt={6}
      overflow={'hidden'}
      css={{ '--accent-color': '#b6fb0d' }}
    >
      <Flex direction="column" gap={'85px'} mb={10}>
        <VideoApp tokenRef={tokenRef} />
        <PreSaleApp />
        <WhatGivesTokenApp />
        <UtilityApp />
        <DigitalMarketApp />
        <TokenDemandApp />
        <ModelApp />
        <MechanicsApp />
        <TokenomicApp />
        <RiskApp />
        <TokenLaunchApp />
        <AlreadyTodayApp />
        <PreSaleOpenApp />
        <TakePartApp ref={tokenRef} />
      </Flex>
      <Flex gap={'85px'} direction={'column'}>
        <SupportApp mb={7} />
        <FooterApp />
      </Flex>
      <AuthModalApp isButtonClose />
    </AppLayoutBound>
  );
};
