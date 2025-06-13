import type React from 'react';
import { forwardRef } from 'react';

import { Flex, type FlexProps } from '@chakra-ui/react';

type PatternBlockAppProps = { children: React.ReactNode } & FlexProps;

export const PatternBlockApp = forwardRef<HTMLDivElement, PatternBlockAppProps>(
  ({ children, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        border={'1px solid'}
        borderColor={'background.secondary'}
        gap={{ base: '16px' }}
        py={'23.5px'}
        px={4}
        rounded={'16px'}
        direction={'column'}
        position={'relative'}
        zIndex={0}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.7,
          backgroundImage: 'url(sprite/pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'left center',
          backgroundSize: '110px',
          zIndex: -1,
        }}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);
