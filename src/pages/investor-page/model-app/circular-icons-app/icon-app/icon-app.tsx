import { forwardRef } from 'react';

import { Flex } from '@chakra-ui/react';

import { AppIcon, type IconName } from '@/shared/ui/app-icon';

type IconAppProps = {
  iconName: IconName;
  index: number;
};
export const IconApp = forwardRef<HTMLDivElement, IconAppProps>(
  ({ iconName, index }, ref) => {
    const getCorrectPosition = (index: number) => {
      if (index === 0) {
        return { top: '0px', left: '50%', transform: 'translate(-50%, 0)' };
      } else if (index === 1) {
        return { top: '50%', right: '0px', transform: 'translate(0, -50%)' };
      } else if (index === 2) {
        return { bottom: '0px', left: '50%', transform: 'translate(-50%, 0)' };
      } else if (index === 3) {
        return { top: '50%', left: '0px', transform: 'translate(0, -50%)' };
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
        border={'1px solid'}
        borderColor={'background.secondary'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <AppIcon name={iconName} width={'42px'} height={'42px'} />
      </Flex>
    );
  }
);
