import { useAppTonButton } from './hooks';

import { Spinner } from '@chakra-ui/react';

import { sliseAddress } from '@/shared/lib/utils/slise-address';

import { AppButtonBorderGradient } from '../app-button-border-gradient';

export const AppTonButton = () => {
  const { state, functions } = useAppTonButton();

  const isConnectionRestored = state.isConnectionRestored;

  const tonConnectUI = state.tonConnectUI;
  const userFriendlyAddress = state.userFriendlyAddress;
  const wallet = state.wallet;

  const handleDisconnect = functions.handleDisconnect;

  return (
    <AppButtonBorderGradient
      fontSize={{ base: '24px', sm: '32px' }}
      px={{ base: '24px', sm: '32px' }}
      py={{ base: '24px', sm: '42px' }}
      onClick={() =>
        wallet?.account.address ? handleDisconnect() : tonConnectUI.openModal()
      }
    >
      {wallet?.account.address ? (
        sliseAddress(userFriendlyAddress)
      ) : isConnectionRestored ? (
        'Подключить кошелек'
      ) : (
        <Spinner />
      )}
    </AppButtonBorderGradient>
  );
};
