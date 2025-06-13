import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';

import { Flex, type FlexProps } from '@chakra-ui/react';

import { AppSmallText } from '../typography/app-small-text';

type AppCardWayProps = FlexProps &
  HTMLAttributes<HTMLDivElement> & {
    descriptions: string | ReactNode;
    varianButton?: string;
  };

export const AppCardWay = forwardRef<HTMLDivElement, AppCardWayProps>(
  (
    {
      descriptions,

      children,

      ...props
    },
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        direction={'column'}
        p={5}
        gap={4}
        bgColor={'background.third'}
        borderRadius="xl"
        {...props}
      >
        <AppSmallText>{descriptions}</AppSmallText>
        {children}
      </Flex>
    );
  }
);
