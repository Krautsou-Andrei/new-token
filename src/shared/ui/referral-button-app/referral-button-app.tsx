import { Box, Button } from '@chakra-ui/react';

import { copyText } from '@/shared/lib/utils';

import { AppIcon } from '../app-icon';
import { AppExtraSmallText } from '../typography/app-extra-small-text';

type ReferralButtonAppProps = {
  link: string;
  isTextArea?: boolean;
};

export const ReferralButtonApp = ({
  link,
  isTextArea = false,
}: ReferralButtonAppProps) => {
  const handleClick = () => {
    copyText(link);
  };

  return (
    <Button
      variant="fourth"
      position="relative"
      textAlign="left"
      p={4}
      minHeight="48px"
      width="full"
      height={isTextArea ? 'auto' : '48px'}
      onClick={handleClick}
    >
      <AppExtraSmallText
        pr="28px"
        {...(!isTextArea
          ? {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
            }
          : {
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            })}
      >
        {link}
      </AppExtraSmallText>

      <Box position="absolute" top="12px" right="12px" cursor="pointer">
        <AppIcon name="icon/clipboard" width="20px" height="20px" />
      </Box>
    </Button>
  );
};
