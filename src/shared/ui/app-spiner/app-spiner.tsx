import { Flex, Spinner } from '@chakra-ui/react';

export const AppSpiner = () => {
  return (
    <Flex
      align={'center'}
      justifyContent={'center'}
      position={'fixed'}
      w={'full'}
      h={'full'}
      top={0}
      left={0}
      bgColor={'background.page'}
      opacity={0.8}
      zIndex={10}
    >
      <Spinner />
    </Flex>
  );
};
