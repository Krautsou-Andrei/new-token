import { Box, type BoxProps, Button, Flex, Text } from '@chakra-ui/react';

import { useModalStore } from '@/shared/lib/persistance/modal.store';

import { SLIDES } from '../../const';

type SlideAppProps = BoxProps & {
  title: string;
  balance?: string;
};

export const SlideApp = ({ title, balance, ...props }: SlideAppProps) => {
  const { openSuccessModal } = useModalStore();

  return (
    <Box
      pt={5}
      fontFamily={'beatstreetregular'}
      fontSize={{ base: '28px', sm: '32px' }}
      fontWeight={400}
      color={'text.secondary'}
      {...props}
    >
      <Flex direction={'column'} alignItems={'center'}>
        <Button
          variant={'iconDefault'}
          size={'fit'}
          fontFamily={title === SLIDES[1].title ? 'Inter' : 'Rhythmic'}
          onClick={() => openSuccessModal()}
          color={'inherit'}
        >
          <Text> {title} + </Text>
        </Button>

        <Text
          color={'text.white'}
          fontSize={{ base: '20px', sm: '24px' }}
          fontWeight={400}
          fontFamily={'tektur'}
        >
          {balance ? balance : 5000}
        </Text>
      </Flex>
    </Box>
  );
};
