import { forwardRef } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { AppIcon } from '@/shared/ui/app-icon';

export const CircleApp = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Flex ref={ref} direction={'column'} gap={6} alignItems={'center'} mb={6}>
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
          <AppIcon name="icon/global" width={201} height={152} />
        </Box>
      </Flex>
    </Flex>
  );
});
