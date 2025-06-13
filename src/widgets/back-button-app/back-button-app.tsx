import { Button, Flex, chakra } from '@chakra-ui/react';

import { AppIcon } from '@/shared/ui/app-icon';

type ButtonProps = {
  borderRadius?: string;
};

export const BackButtonApp = ({ borderRadius = 'full' }: ButtonProps) => {
  return (
    <>
      <Button
        onClick={() => window.history.back()}
        as={Button}
        justifyContent="space-between"
        bgColor={'background.primary'}
        borderRadius={borderRadius}
        px={3.5}
        py={3}
        h={'fit-content'}
        w={'fit-content'}
        color={'text.white'}
        _hover={{
          bg: 'background.secondary',
          outline: '0',
          color: 'text.black',
        }}
        _active={{
          color: 'text.black',
          bg: 'background.secondary',
          outline: '0',
        }}
      >
        <Flex align={'center'} justify="space-between" gap={2.5}>
          <chakra.span textStyle={'text_xs_500'}>
            <AppIcon name="icon/back" width={'16px'} height={'16px'} />
          </chakra.span>
        </Flex>
      </Button>
    </>
  );
};
