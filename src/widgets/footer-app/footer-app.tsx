import { useRef } from 'react';

import { Box, Flex, type FlexProps } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';
import { Link } from '@tanstack/react-router';

import { slideFromBottom } from '@/shared/consts';
import { AppIcon } from '@/shared/ui/app-icon';

import { SOCIAL } from './const';

type FooterAppProps = {} & FlexProps;

export const FooterApp = ({ ...props }: FooterAppProps) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: containerRef, start: 'top bottom' });
    },
    { scope: containerRef }
  );
  return (
    <Flex
      ref={containerRef}
      alignItems={'center'}
      gap={5}
      justifyContent={'center'}
      w={'full'}
      {...props}
    >
      {SOCIAL.map((item) => (
        <Link key={item.id} to={item.url}>
          <Box p={2.5}>
            <AppIcon
              key={item.id}
              name={item.iconName}
              width={'20px'}
              height={'20px'}
            />{' '}
          </Box>
        </Link>
      ))}
    </Flex>
  );
};
