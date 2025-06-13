import { Box, Flex, Text } from '@chakra-ui/react';
import { useTonWallet } from '@tonconnect/ui-react';

import { AppTransactionModal } from '@/widgets/app-transaction-modal';

import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppTonButton } from '@/shared/ui/app-ton-button';

import { FormApp } from './form-app';
import { Steiking } from './steiking';

export const AirdropPage = () => {
  const wallet = useTonWallet();
  const { isSuccessModal, closeSuccessModal } = useModalStore();

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
            <Flex w={'full'} justifyContent={'center'}>
              <AppTonButton />
            </Flex>
          )}
        </Box>
      </Flex>
      <AppTransactionModal
        isOpen={isSuccessModal}
        onClose={closeSuccessModal}
      />
    </AppLayoutBound>
  );
};
