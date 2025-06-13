import type { FC, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';
import { Outlet } from '@tanstack/react-router';

import { NavLayoutPanel } from './nav-layout-panel';

export const NavLayout: FC<PropsWithChildren> = () => {
  return (
    <Box pb={'104px'}>
      <Outlet />
      <NavLayoutPanel />
    </Box>
  );
};
