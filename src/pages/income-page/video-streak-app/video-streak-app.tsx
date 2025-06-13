import { useTranslation } from 'react-i18next';

import { useVideoStep } from './hooks/use-video-step';

import { Box, Flex, Text } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

export const VideoStreakApp = () => {
  const { state } = useVideoStep();
  const { t } = useTranslation();

  return (
    <Box
      border={'1px solid'}
      borderColor={'border.primary'}
      borderRadius={'16px'}
      padding={'20px 10px'}
      textAlign={'center'}
      marginBottom={'64px'}
    >
      <AppHeading marginBottom={4}>
        {t(LOCAL_TEXT.INCOME_PAGE.SERIES_VIDEO)}
      </AppHeading>
      {state.currentCount < DEFAULT.VIDEO_ONE_DAYS && (
        <AppSmallText marginBottom={'28px'}>
          {t(LOCAL_TEXT.INCOME_PAGE.LAST_PUBLIC_VIDEO, {
            value: state.currentCount,
            valueTwo: state.lastCountVideo,
          })}
        </AppSmallText>
      )}

      <Flex
        justifyContent={'space-between'}
        position={'relative'}
        marginBottom={'28px'}
      >
        <Box
          position="absolute"
          top="50%"
          left="0"
          width="100%"
          height="10px"
          bgColor={'background.fourth'}
          transform="translateY(-50%)"
          zIndex={-2}
        />

        <Box
          position="absolute"
          top="50%"
          left="30px"
          height="10px"
          bgColor="background.secondary"
          transform="translateY(-50%)"
          zIndex={-1}
          width={`calc(${(((state.currentStep > DEFAULT.VIDEO_ONE_DAYS ? DEFAULT.VIDEO_ONE_DAYS : state.currentStep) - 1) / (state.stepsProgressArr.length - 1)) * 100}% - 30px)`}
          transition="width 0.1s ease"
        />

        {state.stepsProgressArr.map((item, i) => (
          <Box
            key={i}
            borderRadius={'full'}
            width={{ md: '64px', base: '52px' }}
            height={{ md: '64px', base: '52px' }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            bgColor={
              i <= state.currentStep - 1
                ? 'background.secondary'
                : 'background.fourth'
            }
            color={'text.black'}
          >
            <AppHeading fontSize={{ md: '22px', base: '18px' }}>
              {item}
            </AppHeading>
          </Box>
        ))}
      </Flex>
      <Box marginBottom={'16px'}>
        <AppHeading
          textColor={'text.secondary'}
        >{`+15 000 ${DEFAULT.TOKEN}`}</AppHeading>
        <Text textStyle={'text_xs_500'} textColor={'text.secondary'}>
          {t(LOCAL_TEXT.INCOME_PAGE.ONE_SERIES)}
        </Text>
      </Box>
      {state.currentCount >= DEFAULT.VIDEO_ONE_DAYS && (
        <AppSmallText textColor={'text.third'}>
          {t(LOCAL_TEXT.INCOME_PAGE.GO_TOMMOROW, { value: DEFAULT.TOKEN })}
        </AppSmallText>
      )}
    </Box>
  );
};
