import type { HTMLAttributes } from 'react';

import { Flex, Text } from '@chakra-ui/react';
import type { ReactNode } from '@tanstack/react-router';

type AppCardChangeProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  descriptions: string | ReactNode;
};

export const AppCardBase = ({
  title,
  descriptions,
  children,
}: AppCardChangeProps) => {
  return (
    <Flex
      p={4}
      background={'background.third'}
      direction={'column'}
      gap={{ base: '12px' }}
      rounded={'16px'}
    >
      <Text textStyle={'text_md_600'}>{title}</Text>
      <Text textStyle={'text_xs_500'}>{descriptions}</Text>
      {children}
    </Flex>
  );
};
