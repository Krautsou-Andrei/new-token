import type { Video } from 'api';
import { useTranslation } from 'react-i18next';

import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { useRewardVideo } from '@/shared/api/hooks/video';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatDateDots } from '@/shared/lib/utils';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

type CardVideoAppProps = {
  video: Video;
  hasBtn?: boolean;
};

export const CardVideoApp = ({ video, hasBtn }: CardVideoAppProps) => {
  const { mutateAsync: rewarVideo } = useRewardVideo();
  const { t } = useTranslation();

  return (
    <Flex
      gap={'12px'}
      justifyContent={'space-between'}
      bgColor={'background.third'}
      borderRadius={'16px'}
      padding={'14px'}
    >
      {/* <Box width={'30%'}>
        <Image src={'cardImage.png'} objectFit={'cover'} />
      </Box> */}
      {/*  Затычка иконка видео пока что */}
      <Box
        background={'background.primary'}
        width={'30%'}
        position={'relative'}
        rounded={'16px'}
        cursor={'pointer'}
        onClick={() => window.open(video.url, '_blank')}
      >
        <Flex
          background={'background.primary'}
          borderRadius={'full'}
          height={'40px'}
          width={'40px'}
          p={'10px'}
          pl={'15px'}
          alignItems={'center'}
          justifyContent={'center'}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          bgColor={'background.secondary'}
        >
          <AppIcon name="icon/play" width={'100%'} height={'100%'} />
        </Flex>
      </Box>
      <Flex
        flex={'1'}
        direction={'column'}
        gap={'12px'}
        alignItems={'flex-end'}
        textAlign={'right'}
      >
        <Flex gap={'6px'} alignItems={'center'}>
          <Text
            textStyle={'text_md_600'}
            fontSize={{ md: '22px', base: '18px' }}
          >
            {video.views}
          </Text>
          <AppIcon name={'icon/eye'} width={'24px'} height={'24px'} />
        </Flex>
        <Text
          textStyle={'text_xs_500'}
          textColor={'text.third'}
          fontSize={{ md: '16px', base: '14px' }}
        >
          {t(LOCAL_TEXT.INCOME_PAGE.PUBLIC)}:{' '}
          {formatDateDots(new Date(video.updatedAt))}
        </Text>
        {hasBtn && video.isActive ? (
          <Button
            variant="third"
            padding={{ md: '12px 20px', base: '10px 16px' }}
            width={'auto'}
            height={'auto'}
            onClick={() => {
              rewarVideo({ params: { videoId: video.id } });
            }}
          >
            <AppSmallText fontSize={{ md: '18px', base: '14px' }}>
              {t(LOCAL_TEXT.INCOME_PAGE.GET_AWARDS)}
            </AppSmallText>
          </Button>
        ) : video.isActive ? (
          <Flex gap={'6px'} alignItems={'center'}>
            <AppSmallText
              textColor={'text.secondary'}
              fontSize={{ md: '18px', base: '14px' }}
            >
              {t(LOCAL_TEXT.INCOME_PAGE.VIEWS)}
            </AppSmallText>

            <AppIcon name={'icon/clock'} width={'24px'} height={'24px'} />
          </Flex>
        ) : (
          <Flex gap={'6px'} alignItems={'center'}>
            <AppSmallText
              fontSize={{ md: '18px', base: '14px' }}
              textColor={'text.third'}
            >
              {t(LOCAL_TEXT.INCOME_PAGE.AWARD_RECEIVED)}
            </AppSmallText>

            <AppIcon
              name={'icon/tick-circle-video'}
              width={'24px'}
              height={'24px'}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
