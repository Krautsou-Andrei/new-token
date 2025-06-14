import { type ReactNode } from 'react';

import { Box, type BoxProps } from '@chakra-ui/react';
import { useInitData } from '@vkruglikov/react-telegram-web-app';

import { useLogin } from '@/shared/api/hooks/auth/use-login';

interface AppLayoutBoundProps extends BoxProps {
  children: ReactNode;
}

export const AppLayoutBound = ({ children, ...props }: AppLayoutBoundProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_initDataUnsafe, initData] = useInitData();

  useLogin(initData);

  return (
    <Box maxW="600px" mx="auto" px={5} {...props}>
      {children}
    </Box>
  );
};
