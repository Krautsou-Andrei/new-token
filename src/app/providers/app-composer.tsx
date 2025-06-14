import { ConnectKitProvider } from 'connectkit';
import { type FC, type PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import { ComposeChildren, isMobileDevice } from '@/shared/lib/utils';

import { AppGoogleAuthProvider } from './app-google-auth-provider';
import { AppQueryProvider } from './app-query-provider';
import { AppRouterProvider } from './app-router';
import { AppSolanaProvider } from './app-solana-provider';
import { AppTonConnectUi } from './app-ton-connect-ui';
import { AppWebAppTElegramProvider } from './app-web-app-telgram-provider';
import { ThemeProvider } from './theme-provider';
import { Web3Provider } from './web-3-provider';
import './with-i18n';

export const AppComposer: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = isMobileDevice();

  return (
    <ComposeChildren>
      <AppSolanaProvider>
        <Web3Provider>
          <AppWebAppTElegramProvider>
            <AppQueryProvider>
              <ConnectKitProvider debugMode>
                <ThemeProvider>
                  <AppGoogleAuthProvider>
                    <AppTonConnectUi>
                      <AppRouterProvider />
                      {children}

                      <Toaster
                        position="top-center"
                        containerClassName="toaster-container"
                        containerStyle={{
                          top: isMobile ? '10vh' : '1vh',
                        }}
                        toastOptions={{
                          style: {
                            zIndex: '3 !important',
                            backgroundColor: '#333',
                          },
                          duration: 5000,
                        }}
                        reverseOrder={false}
                      />
                    </AppTonConnectUi>
                  </AppGoogleAuthProvider>
                </ThemeProvider>
              </ConnectKitProvider>
            </AppQueryProvider>
          </AppWebAppTElegramProvider>
        </Web3Provider>
      </AppSolanaProvider>
    </ComposeChildren>
  );
};
