import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { SLIDES } from '../../const';

type SlideAppProps = {
  title: string;
  balance?: string;
};

export const SlideApp = ({ title, balance }: SlideAppProps) => {
  return (
    <Box
      pt={5}
      fontFamily={'beatstreetregular'}
      fontSize={{ base: '28px', sm: '32px' }}
      fontWeight={400}
    >
      <Flex direction={'column'} alignItems={'center'}>
        <Button
          variant={'iconDefault'}
          size={'fit'}
          color={'text.secondary'}
          fontFamily={title === SLIDES[1].title ? 'Inter' : 'Rhythmic'}
        >
          <Text> {title} + </Text>
        </Button>

        <Text
          color={'text.white'}
          fontSize={{ base: '20px', sm: '24px' }}
          fontWeight={400}
          fontFamily={'tektur'}
        >
          {balance}
        </Text>
      </Flex>
    </Box>
  );
};
