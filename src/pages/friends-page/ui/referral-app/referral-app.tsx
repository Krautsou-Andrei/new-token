import { useTranslation } from 'react-i18next';

import { Box, Button, Flex } from '@chakra-ui/react';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetRefData } from '@/shared/api/hooks/users/use-get-ref-data';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { copyText } from '@/shared/lib/utils';
import { AppIcon } from '@/shared/ui/app-icon';

export const ReferralApp = () => {
  const { data: user } = useAuthMe();
  const { data: refLInk } = useGetRefData(user?.id, Boolean(user?.id));
  const { t } = useTranslation();

  return (
    <Box
      position={'fixed'}
      bottom={21}
      maxW={'600px'}
      left="50%"
      transform="translateX(-50%)"
      background={'background.page'}
      w={'full'}
      py={5}
      px={2.5}
    >
      <Button
        onClick={() => copyText(refLInk?.refLink || '')}
        disabled={!refLInk?.refLink}
        size={'sm'}
      >
        <Flex alignItems={'center'} gap={2}>
          {t(LOCAL_TEXT.FRIENDS_PAGE.SHARED_FRIEND)}
          <Flex
            borderRadius={'full'}
            w={9}
            height={9}
            alignItems={'center'}
            justifyContent={'center'}
            bg={'background.page'}
          >
            <AppIcon name="icon/copy" width={24} height={24} />
          </Flex>
        </Flex>
      </Button>
    </Box>
  );
};
