import { forwardRef } from 'react';

import { Flex } from '@chakra-ui/react';

import { AppIcon } from '@/shared/ui/app-icon';

type IconAppProps = {
  index: number;
};
export const ArrowApp = forwardRef<HTMLDivElement, IconAppProps>(
  ({ index }, ref) => {
    const getCorrectPosition = (index: number) => {
      if (index === 0) {
        return { top: '0', right: '0', transform: 'rotate(0deg)' };
      } else if (index === 1) {
        return { bottom: '0', right: '0', transform: 'rotate(90deg)' };
      } else if (index === 2) {
        return { bottom: '0', left: '0', transform: 'rotate(180deg)' };
      } else if (index === 3) {
        return { top: '0', left: '0', transform: 'rotate(-90deg)' };
      }
    };
    return (
      <Flex
        ref={ref}
        borderRadius={'50%'}
        position={'absolute'}
        width={'84px'}
        height={'84px'}
        {...getCorrectPosition(index)}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <AppIcon name={'icon/circular'} width={'46px'} height={'35px'} />
      </Flex>
    );
  }
);
