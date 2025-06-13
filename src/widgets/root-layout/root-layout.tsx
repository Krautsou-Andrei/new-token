import type { FC, PropsWithChildren } from 'react';

import { Box, Stack } from '@chakra-ui/react';

import { RootLayoutHeader } from './root-layout-header';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack>
      <RootLayoutHeader />
      <Box as={'main'}>{children}</Box>
    </Stack>
  );
};
