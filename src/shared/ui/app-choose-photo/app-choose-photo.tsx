import type { HTMLAttributes } from 'react';

import { Box } from '@chakra-ui/react';

import { AppIcon } from '../app-icon';

type AppChoosePhotoProps = HTMLAttributes<HTMLDivElement> & {};

export const AppChoosePhoto = ({ ...props }: AppChoosePhotoProps) => {
  return (
    <Box
      cursor={'pointer'}
      flex={'0 0 72px'}
      width={'72px'}
      height={'72px'}
      position={'relative'}
      background={'background.secondary'}
      rounded={'50%'}
      p={1}
      {...props}
    >
      <AppIcon name="icon/profile" width={'100%'} height={'100%'} />

      <Box
        border={'4px solid'}
        borderColor={'background.page'}
        w={10}
        h={10}
        rounded={'50%'}
        position={'absolute'}
        background={'background.primary'}
        p={'5px'}
        right={'-10px'}
        bottom={'-5px'}
      >
        <AppIcon name="icon/image" width={'100%'} height={'100%'} />
      </Box>
    </Box>
  );
};
