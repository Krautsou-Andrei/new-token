import { useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import { toUserFriendlyAddress, useTonWallet } from '@tonconnect/ui-react';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

import { AppNotifyModal } from '@/widgets/app-notify-modal';
import { AppTransactionModal } from '@/widgets/app-transaction-modal';
import { BackButtonApp } from '@/widgets/back-button-app';

import { useGetStakingUser } from '@/shared/api/hooks/staking/use-get-staking-user';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { sliseAddress } from '@/shared/lib/utils/slise-address';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppTonButton } from '@/shared/ui/app-ton-button';

import { FormApp } from './form-app';
import { Steiking } from './steiking';

export const AirdropPage = () => {
  const wallet = useTonWallet();
  const WebApp = useWebApp();
  const telegramId = WebApp?.initDataUnsafe?.user?.id;

  const { isSuccessModal, closeSuccessModal } = useModalStore();
  const [isOpenModalNotify, setIsOpenModalNotify] = useState(false);

  const { data } = useGetStakingUser(telegramId || '1718587413');

  console.log('data', data);

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
                  5000.00
                </Text>
                <Text
                  fontSize={{ base: '20px', sm: '24px' }}
                  lineHeight={'100%'}
                  fontWeight={400}
                  fontFamily={'tektur'}
                  color={'text.secondary'}
                >
                  anon tokens
                </Text>
              </Flex>
              <FormApp mb={5} />
              <Steiking />
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
