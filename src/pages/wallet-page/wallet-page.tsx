import { useTranslation } from 'react-i18next';

import { Flex } from '@chakra-ui/react';

import { useProtected } from '@/features/auth/hook/use-protected';

import { NavLayoutPanel } from '@/widgets/nav-layout/nav-layout-panel';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppPageHeading } from '@/shared/ui/typography/app-page-heading';

import { BalanceH2eApp } from './ui/balance-h2e-app';
import { ConnectWalletApp } from './ui/connect-button-app';
import { MoreXpApp } from './ui/more-xp-app';
import { TokensSquaresApp } from './ui/tokens-squares-app';

export const WalletPage = () => {
  useProtected();
  const { t } = useTranslation();

  return (
    <AppLayoutBound pb={'104px'}>
      <AppPageHeading>{t(LOCAL_TEXT.WALLET_PAGE.TITLE)}</AppPageHeading>

      <Flex
        height={'100%'}
        direction={'column'}
        justifyContent={'space-between'}
        gap={{ base: '10px' }}
        pb={30}
      >
        <Flex pt={9} direction={'column'} gap={{ base: '36px' }}>
          <TokensSquaresApp />
          <BalanceH2eApp />
          <MoreXpApp />
        </Flex>
      </Flex>

      <ConnectWalletApp />

      <NavLayoutPanel />
    </AppLayoutBound>
  );
};
