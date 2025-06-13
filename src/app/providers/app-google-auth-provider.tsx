import type { FC, PropsWithChildren } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { env } from '@/shared/consts';

export const AppGoogleAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={env.googleClientId}>
      {children}
    </GoogleOAuthProvider>
  );
};
