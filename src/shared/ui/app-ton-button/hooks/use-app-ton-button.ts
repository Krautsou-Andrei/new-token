import { useCallback } from 'react';

import { CHAIN, toUserFriendlyAddress } from '@tonconnect/sdk';
import {
  useIsConnectionRestored,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react';

export const useAppTonButton = () => {
  const wallet = useTonWallet();
  const isConnectionRestored = useIsConnectionRestored();
  const [tonConnectUI] = useTonConnectUI();

  const userFriendlyAddress = wallet
    ? toUserFriendlyAddress(
        wallet.account.address,
        wallet.account.chain === CHAIN.TESTNET
      )
    : '';

  const handleDisconnect = useCallback(() => {
    tonConnectUI.connector.disconnect();
  }, [tonConnectUI.connector]);

  return {
    state: {
      isConnectionRestored,
      tonConnectUI,
      userFriendlyAddress,
      wallet,
    },
    functions: {
      handleDisconnect,
    },
  };
};
