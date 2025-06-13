import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';

export const AppTonConnectUi = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TonConnectUIProvider
      manifestUrl="https://jeton.store/tonconnect-manifest.json"
      uiPreferences={{
        theme: THEME.DARK,
        borderRadius: 's',
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
