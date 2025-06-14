import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';

export const AppWebAppTElegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      {children}
    </WebAppProvider>
  );
};
