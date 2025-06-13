import { useTranslation } from 'react-i18next';

import { Box, Flex, Text } from '@chakra-ui/react';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetLiderboardVideo } from '@/shared/api/hooks/video';
import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

import { CardApp } from './card-app';

export const LeaderBoardApp = () => {
  const { data: user } = useAuthMe();
  const { data: liderboard } = useGetLiderboardVideo();
  const { t } = useTranslation();

  return (
    <Flex
      direction={'column'}
      gap={'16px'}
      padding={'20px 10px'}
      borderRadius={'16px'}
      bgColor={'background.third'}
      textAlign={'center'}
      marginBottom={'64px'}
    >
      <Flex gap={'4px'} alignItems={'center'} justifyContent={'center'}>
        <AppHeading>{t(LOCAL_TEXT.INCOME_PAGE.LIDER_BOARD_HEADING)}</AppHeading>
        <AppIcon width={'32px'} height={'32px'} name={'icon/cup'} />
      </Flex>
      <AppSmallText>
        {t(LOCAL_TEXT.INCOME_PAGE.LIDER_BOARD_CHAMPION)}
      </AppSmallText>

      <Flex direction={'column'} gap={'12px'}>
        {liderboard?.more && (
          <CardApp
            isAhead
            nick={liderboard.more.name}
            uploadedAmount={liderboard.more.videoCount}
          />
        )}
        {user && liderboard && (
          <CardApp
            nick={user.name}
            isMe
            position={liderboard.place}
            uploadedAmount={liderboard.videoCount}
          />
        )}
        {liderboard?.less && user && (
          <CardApp
            nick={liderboard.less.name}
            uploadedAmount={liderboard.less.videoCount}
          />
        )}
      </Flex>
      <Box>
        <AppHeading
          textColor={'text.secondary'}
        >{`+100 000 ${DEFAULT.TOKEN}`}</AppHeading>
        <Text textStyle={'text_xs_500'} textColor={'text.secondary'}>
          {t(LOCAL_TEXT.INCOME_PAGE.PRIZE_FUND)}
        </Text>
      </Box>
    </Flex>
  );
};
