import { useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import { Address } from '@ton/core';
import { toUserFriendlyAddress, useTonWallet } from '@tonconnect/ui-react';

// import { useWebApp } from '@vkruglikov/react-telegram-web-app';

import { AppNotifyModal } from '@/widgets/app-notify-modal';
import { AppTransactionModal } from '@/widgets/app-transaction-modal';
import { BackButtonApp } from '@/widgets/back-button-app';

import { useGetJettonBalances } from '@/shared/api/hooks/jetton/use-get-jetton-balances';
import { env } from '@/shared/consts';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { getBalanceJettonAddress } from '@/shared/lib/utils/get-balance-jetton-address';
import { sliseAddress } from '@/shared/lib/utils/slise-address';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppSeparator } from '@/shared/ui/app-separator';
import { AppTonButton } from '@/shared/ui/app-ton-button';

import { FormApp } from './form-app';
import { Steiking } from './steiking';
import { UserStaking } from './user-staking';

export const AirdropPage = () => {
  const wallet = useTonWallet();
  // const WebApp = useWebApp();
  // const telegramId = WebApp?.initDataUnsafe?.user?.id;

  const { isSuccessModal, closeSuccessModal } = useModalStore();
  const [isOpenModalNotify, setIsOpenModalNotify] = useState(false);

  const JettonMasterAddress = Address.parse(
    env.jettonMasterAddress
  ).toRawString();

  const { data: jettonBalance } = useGetJettonBalances(
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    wallet?.account.address!,
    Boolean(wallet?.account.address)
  );

  const jettonMasterBalance = getBalanceJettonAddress(
    jettonBalance,
    JettonMasterAddress
  );

  const selectedJetton = jettonBalance?.find(
    (item) => item?.jetton.address === JettonMasterAddress
  );

  // const { data } = useGetStakingUser(telegramId || '1718587413');

  const triggerModalNotify = () => {
    setIsOpenModalNotify((prev) => !prev);
  };

  return (
    <AppLayoutBound
      position={'relative'}
      overflow={'hidden'}
      css={{ '--accent-color': '#b6fb0d' }}
    >
      <Flex direction={'column'} minH="100dvh" pb={10}>
        <Box flex={1} pt={'110px'}>
          {wallet ? (
            <>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <BackButtonApp />
                <AppButtonBorderGradient
                  fontSize={{ base: '24px', sm: '32px ' }}
                  py={{ base: '2px', sm: '20px' }}
                  px={{ base: '16px', sm: '12px' }}
                  h={'32px'}
                  onClick={triggerModalNotify}
                >
                  {sliseAddress(toUserFriendlyAddress(wallet.account.address))}
                </AppButtonBorderGradient>
              </Flex>
              <Flex
                direction={'column'}
                pt={{ base: 3, sm: 6 }}
                alignItems={'center'}
                mb={{ base: 10, sm: 25 }}
              >
                <Text
                  fontSize={{ base: '48px', sm: '64px' }}
                  lineHeight={'100%'}
                  fontWeight={400}
                  fontFamily={'tektur'}
                >
                  {jettonMasterBalance}
                </Text>
                <Text
                  fontSize={{ base: '20px', sm: '24px' }}
                  lineHeight={'100%'}
                  fontWeight={400}
                  fontFamily={'tektur'}
                  color={'text.secondary'}
                >
                  {selectedJetton?.jetton.symbol || 'anon tokens'}
                </Text>
              </Flex>
              <FormApp mb={5} />
              <Steiking />
              <AppSeparator mb={5} />
              <UserStaking />
            </>
          ) : (
            <>
              <Flex w={'full'} justifyContent={'center'} mb={10}>
                <AppTonButton />
              </Flex>
              <Box pos={'relative'}>
                <FormApp />
                <Box
                  pos={'absolute'}
                  w={'full'}
                  h={'full'}
                  top={0}
                  left={0}
                  bg={'black'}
                  zIndex={10}
                  opacity={0.8}
                />
              </Box>
            </>
          )}
        </Box>
      </Flex>
      <AppTransactionModal
        isOpen={isSuccessModal}
        onClose={closeSuccessModal}
      />
      <AppNotifyModal isOpen={isOpenModalNotify} onClose={triggerModalNotify} />
    </AppLayoutBound>
  );
};
