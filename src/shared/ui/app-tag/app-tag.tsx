import { forwardRef } from 'react';

import { type BoxProps, Flex, Text } from '@chakra-ui/react';

import { AppIcon, type IconName } from '../app-icon';

type AppTagProps = {
  iconName: IconName;
  text: string;
} & BoxProps;

export const AppTag = forwardRef<HTMLDivElement, AppTagProps>(
  ({ iconName, text, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        w={'fit-content'}
        alignItems={'center'}
        gap={2}
        p={4}
        pr={2}
        py={1.5}
        rounded={'full'}
        bgColor={'background.secondary'}
        {...props}
      >
        <Text textStyle={'text_md_600'} color={'text.black'}>
          {text}
        </Text>
        <Flex
          rounded={'full'}
          h={9}
          w={9}
          justifyContent={'center'}
          alignItems={'center'}
          bg={'background.page'}
        >
          <AppIcon name={iconName}></AppIcon>
        </Flex>
      </Flex>
    );
  }
);
