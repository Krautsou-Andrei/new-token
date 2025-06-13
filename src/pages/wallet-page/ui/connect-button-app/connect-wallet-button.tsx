import type { Chain } from 'viem';

import { ConnectKitButton } from 'connectkit';
import { useTranslation } from 'react-i18next';

import { Box, type BoxProps, Button } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

type Hash = `0x${string}`;

type ConnectButtonRendererProps = {
  show?: () => void;
  hide?: () => void;
  chain?: Chain & {
    unsupported?: boolean;
  };
  unsupported: boolean;
  isConnected: boolean;
  isConnecting: boolean;
  address?: Hash;
  truncatedAddress?: string;
  ensName?: string;
};

type ConnectWalletApp = BoxProps & {};

export const ConnectWalletApp = ({ ...props }: ConnectWalletApp) => {
  const { t } = useTranslation();

  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        show,
        truncatedAddress,
        ensName,
      }: ConnectButtonRendererProps) => {
        return (
          <Box
            position={'fixed'}
            bottom={21}
            w={'calc(100% - 40px)'}
            left={5}
            background={'background.page'}
            py={5}
            {...props}
          >
            <AppLayoutBound
              px={{
                base: '0',
              }}
            >
              <Button
                size={'sm'}
                variant={'primary'}
                onClick={show ? show : () => {}}
              >
                {isConnected
                  ? (ensName ?? truncatedAddress)
                  : t(LOCAL_TEXT.BUTTON_CONNECT_WALLET)}
              </Button>
            </AppLayoutBound>
          </Box>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
