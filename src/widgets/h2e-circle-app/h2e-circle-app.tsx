import { forwardRef } from 'react';

import { Box, Flex, type FlexProps, Text } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { AppIcon } from '@/shared/ui/app-icon';

type H2eCircleAppProps = {} & FlexProps;
export const H2eCircleApp = forwardRef<HTMLDivElement, H2eCircleAppProps>(
  ({ ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction={'column'}
        gap={6}
        alignItems={'center'}
        {...props}
      >
        <Flex position={'relative'}>
          <Box
            position={'relative'}
            height={'fit-content'}
            width={'fit-content'}
            rounded={'full'}
            padding={4}
            display="flex"
            border={'1px solid'}
            borderColor={'border.primary'}
          >
            <AppIcon
              className="rotate"
              name="icon/h2e"
              width={300}
              height={300}
            />
          </Box>
          <Box
            position={'absolute'}
            width={'70%'}
            height={'70%'}
            left={'50%'}
            top="50%"
            transform="translate(-50%, -50%)"
            bgColor={'background.secondary'}
            rounded={'full'}
            boxShadow={'inset 0 19px 4px 0 rgba(0, 0, 0, 0.25)'}
          />
          <Box
            alignItems={'center'}
            justifyContent={'center'}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          >
            <Text
              position={'absolute'}
              fontSize={'56px'}
              lineHeight={'120%'}
              textTransform={'uppercase'}
              fontFamily={'druk_wide_cyrbold'}
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              color={'text.black'}
            >
              {DEFAULT.TOKEN_PRE_SALE}
            </Text>
          </Box>
        </Flex>
      </Flex>
    );
  }
);
