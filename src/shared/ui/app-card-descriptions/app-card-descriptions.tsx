import type { HTMLAttributes, ReactNode } from 'react';

import { Box, Flex, type FlexProps, Text, forwardRef } from '@chakra-ui/react';

import { AppIcon, type IconName } from '../app-icon';

type AppCarddescriptionsProps = FlexProps &
  HTMLAttributes<HTMLDivElement> & {
    cardTitle?: string | ReactNode;
    descriptions: string | ReactNode;
    iconName?: IconName;
    isBorder?: boolean;
    highlightIconName?: IconName;
    iconSize?: {
      height: number;
      width: number;
    };
    isHighlight?: boolean;
    isAnimated?: boolean;
    descColor?: string;
  };

export const AppCardDescriptions = forwardRef<AppCarddescriptionsProps, 'div'>(
  (
    {
      descriptions,
      iconName,
      isBorder,
      iconSize,
      cardTitle,
      isHighlight,
      isAnimated,
      highlightIconName,
      descColor,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        py={4}
        px={5}
        alignItems="center"
        gap={5}
        bgColor={'background.third'}
        borderRadius="xl"
        border={isBorder ? '1px solid' : ''}
        borderColor="border.primary"
        transition="background-color 0.3s ease"
        {...props}
      >
        {iconName && (
          <Box>
            <AppIcon
              name={
                isHighlight && highlightIconName ? highlightIconName : iconName
              }
              width={iconSize?.width ?? 48}
              height={iconSize?.height ?? 48}
            />
          </Box>
        )}
        <Flex flex={1} direction="column" gap={1}>
          {cardTitle && (
            <Text
              className="title"
              color={isAnimated ? '' : 'text.white'}
              textStyle={{ base: 'text_xs_600', sm: 'text_md_600' }}
              transition="color 0.3s ease"
            >
              {cardTitle}
            </Text>
          )}

          <Text
            color={
              descColor
                ? descColor
                : isAnimated
                  ? ''
                  : cardTitle
                    ? 'text.tertiary'
                    : ''
            }
            textStyle={cardTitle ? 'text_xs_500' : 'text_sm_500'}
            transition="color 0.3s ease"
          >
            {descriptions}
          </Text>
        </Flex>
        {children}
      </Flex>
    );
  }
);
