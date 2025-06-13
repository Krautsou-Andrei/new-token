import { Flex, type FlexProps } from '@chakra-ui/react';

type AppZipperCardProps = FlexProps;

export const AppZipperCard = ({ children, ...props }: AppZipperCardProps) => {
  return (
    <Flex
      alignItems={'center'}
      direction={'column'}
      gap={{ base: '16px' }}
      background={'background.secondary'}
      rounded={'16px'}
      py={'27.5px'}
      textAlign={'center'}
      position={'relative'}
      zIndex={0}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.15,
        backgroundImage: 'url(sprite/pattern.svg)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'left center',
        backgroundSize: '110px',
        zIndex: -1,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};
