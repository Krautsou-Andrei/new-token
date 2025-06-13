import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';

import { Box, Flex, type FlexProps, Text } from '@chakra-ui/react';

import { AppIcon, type IconName } from '../app-icon';

type AppCardChangeProps = FlexProps &
  HTMLAttributes<HTMLDivElement> & {
    descriptions: string | ReactNode;
    iconName: IconName;
    textStyle?: string;
    iconSize?: {
      height: number;
      width: number;
    };
  };

export const AppCardChange = forwardRef<HTMLDivElement, AppCardChangeProps>(
  ({ descriptions, iconName, iconSize, textStyle, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction={'column'}
        p={3}
        gap={2}
        alignItems={'center'}
        bgColor={'background.third'}
        borderRadius="xl"
        {...props}
      >
        <Box>
          <AppIcon
            name={iconName}
            width={iconSize?.width ? iconSize.width : 32}
            height={iconSize?.height ? iconSize.height : 32}
          />
        </Box>
        <Text
          textStyle={
            textStyle
              ? textStyle
              : { base: 'text_xs_smal_500', sm: 'text_xs_500' }
          }
          color={'text.descriptions'}
          textAlign={'center'}
        >
          {descriptions}
        </Text>
      </Flex>
    );
  }
);
