import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { useAwards } from '@/features/awards';

import { DEFAULT } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppIcon } from '@/shared/ui/app-icon';

export const IncomeVideoApp = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { mapAutoTasks, handleMarkTaskAsCompleted } = useAwards();
  const vatchVideo = mapAutoTasks?.get(AWARDS_TASKS.WATCH_START_VIDEO);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <Flex direction={'column'} gap={'12px'} marginBottom={'64px'}>
      <Box
        position="relative"
        width={'100%'}
        aspectRatio={'1/0.5'}
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        bgColor={'background.third'}
      >
        <video
          playsInline
          hidden={!isPlaying}
          ref={videoRef}
          src="/video/about.webm"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
          controls
          autoPlay
          loop={false}
          muted={true}
          onEnded={() => {
            handleMarkTaskAsCompleted(AWARDS_TASKS.WATCH_START_VIDEO);
            setIsPlaying(false);
          }}
        />

        {!isPlaying && (
          <Button
            position="absolute"
            width={'66px'}
            height={'66px'}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            colorScheme="green"
            borderRadius="full"
            onClick={handlePlay}
          >
            <Box
              position="absolute"
              top="50%"
              left="calc(50% + 4px)"
              transform="translate(-50%, -50%)"
            >
              <AppIcon name={'icon/play'} width={'35px'} height={'35px'} />
            </Box>
          </Button>
        )}
      </Box>
      {vatchVideo && !vatchVideo.isClaimed && (
        <Flex direction={'column'} gap={'6px'}>
          <Flex direction={'row'} justifyContent={'space-between'} gap={'6px'}>
            <Text
              textStyle={'text_md_600'}
              fontSize={{ md: '22px', base: '18px' }}
            >
              {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_INSTRUCTION)}
            </Text>
            <Text
              textStyle={'text_md_600'}
              textAlign={'right'}
              textColor={'text.secondary'}
              fontSize={{ md: '22px', base: '18px' }}
            >
              {` +${formatNumberWithSpaces(vatchVideo.reward)} ${DEFAULT.TOKEN}`}
            </Text>
          </Flex>
          <Text textStyle={'text_xs_500'} textColor={'text.third'}>
            {t(LOCAL_TEXT.INCOME_PAGE.VIEW_INSTRUCTION)}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
