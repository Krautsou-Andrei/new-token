import { type ReactNode } from 'react';

import { Box, type BoxProps } from '@chakra-ui/react';

interface AppLayoutBoundProps extends BoxProps {
  children: ReactNode;
}

export const AppLayoutBound = ({ children, ...props }: AppLayoutBoundProps) => {
  return (
    <Box maxW="600px" mx="auto" px={5} {...props}>
      {children}
    </Box>
  );
};
