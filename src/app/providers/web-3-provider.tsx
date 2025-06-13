import { WagmiProvider, createConfig } from 'wagmi';

import { getDefaultConfig } from 'connectkit';
import React from 'react';

import { env } from '@/shared/consts';

const config = createConfig(
  getDefaultConfig({
    appName: 'hypeFactory',
    walletConnectProjectId: env.walletConnetProjctId!,
  })
);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};
