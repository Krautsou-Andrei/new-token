import { Box, Flex, Text } from '@chakra-ui/react';

import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { FormApp } from './form-app';
import { Steiking } from './steiking';

export const AirdropPage = () => {
  return (
    <AppLayoutBound
      position={'relative'}
      overflow={'hidden'}
      css={{ '--accent-color': '#b6fb0d' }}
    >
      <Flex direction={'column'} minH="100dvh" pb={10}>
        <Box flex={1} pt={'110px'}>
          <Flex
            direction={'column'}
            pt={{ base: 3, sm: 6 }}
            alignItems={'center'}
            mb={{ base: 10, sm: 25 }}
          >
            <Text
              fontSize={{ base: '48px', sm: '64px' }}
              lineHeight={'100%'}
              fontWeight={400}
              fontFamily={'tektur'}
            >
              5000.00
            </Text>
            <Text
              fontSize={{ base: '20px', sm: '24px' }}
              lineHeight={'100%'}
              fontWeight={400}
              fontFamily={'tektur'}
              color={'text.secondary'}
            >
              anon tokens
            </Text>
          </Flex>
          <FormApp mb={5} />
          <Steiking />
        </Box>
      </Flex>
    </AppLayoutBound>
  );
};
