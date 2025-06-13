import type { FC } from 'react';

import { Flex, type FlexProps } from '@chakra-ui/react';

export const RootLayoutHeader: FC<FlexProps> = ({ ...props }) => {
  return <Flex {...props}></Flex>;
};
