import type { ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './with-chakra';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
