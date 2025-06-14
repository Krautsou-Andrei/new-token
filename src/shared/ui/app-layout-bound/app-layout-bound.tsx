/* eslint-disable @typescript-eslint/no-unused-vars */
import { type ReactNode, useEffect } from 'react';

import { Box, type BoxProps } from '@chakra-ui/react';
import {
  useExpand,
  useInitData,
  useWebApp,
} from '@vkruglikov/react-telegram-web-app';

import { useLogin } from '@/shared/api/hooks/auth/use-login';
import { isMobileDevice } from '@/shared/lib/utils';

interface AppLayoutBoundProps extends BoxProps {
  children: ReactNode;
}

export const AppLayoutBound = ({ children, ...props }: AppLayoutBoundProps) => {
  const WebApp = useWebApp();

  const [_initDataUnsafe, initData] = useInitData();
  const [_isExpanded, expand] = useExpand();

  useLogin(initData);
  const isMobile = isMobileDevice();

  useEffect(() => {
    expand();
    try {
      if (isMobile) {
        WebApp.requestFullscreen();
        WebApp.disableVerticalSwipes();
      }
    } catch (err) {
      /* empty */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <Box maxW="600px" mx="auto" px={5} {...props}>
      {children}
    </Box>
  );
};
