import type { HTMLAttributes } from 'react';

import { Box } from '@chakra-ui/react';

import { AppIcon } from '../../app-icon';
import { AppHeading } from '../app-heading';

type AppPageHeadingProps = HTMLAttributes<HTMLDivElement> & {
  isBack?: boolean;
  handleBack?: () => void;
};

export const AppPageHeading = ({
  children,
  isBack,
  handleBack,
}: AppPageHeadingProps) => {
  return (
    <Box position={'relative'}>
      <AppHeading
        textTransform={'uppercase'}
        textAlign={'center'}
        fontSize={'24px'}
        pt={5}
      >
        {children}
      </AppHeading>

      {isBack && (
        <Box
          onClick={handleBack}
          cursor={'pointer'}
          position={'absolute'}
          bottom={'2.5px'}
          left={'0'}
        >
          <AppIcon name="arrows/left" />
        </Box>
      )}
    </Box>
  );
};
