import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useSliderAppAnimation } from './hooks/useSliderAppAnimation';

import { Box, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { DEFAULT, slideFromBottom } from '@/shared/consts';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { PROGRESS_BAR_WIDTH } from './const';

type SliderAppProps = {
  cardsLength: number;
  stepsCardsItems: {
    title: string;
    titleHighlight?: string;
    descriptions: string;
    highlight?: string;
    value?: number;
  }[];
};

export const SliderApp = ({ cardsLength, stepsCardsItems }: SliderAppProps) => {
  const { t } = useTranslation();

  const {
    containerRef,
    progressRef,
    sliderRef,
    currentStep,
    cardRefs,
    cardsContainerRef,
    cardDescriptionRefs,
  } = useSliderAppAnimation({
    cardsLength,
  });

  const titleRef = useRef(null);
  const mainContainerRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: mainContainerRef });
    },
    { scope: containerRef }
  );
  const STEPS_HEIGHT = [43, 58, 77, 93];

  return (
    <Flex ref={mainContainerRef} direction={'column'} gap={6}>
      <Box ref={containerRef}>
        <Flex
          width={PROGRESS_BAR_WIDTH}
          justifyContent={'space-between'}
          gap={3}
          alignItems={'flex-end'}
          margin={'0 auto 16px'}
          position={'relative'}
          height={'125px'}
        >
          {STEPS_HEIGHT.map((height, i) => (
            <Flex
              key={i}
              height={'100%'}
              direction={'column'}
              justifyContent={'space-between'}
              color={
                i <= currentStep ? 'background.secondary' : 'background.primary'
              }
              transition={'color 0.3s ease'}
            >
              <AppText textStyle={'text_md_600'} fontSize={'22px'}>
                № {i + 1}
              </AppText>
              <AppIcon
                name={'icon/slider-step-stair'}
                width={'100%'}
                height={height}
              />
            </Flex>
          ))}
        </Flex>
        <Flex
          gap={3}
          justifyContent={'space-between'}
          position={'relative'}
          mb={9}
        >
          <Box
            position="absolute"
            top="50%"
            left="30px"
            width={PROGRESS_BAR_WIDTH}
            height="10px"
            borderRadius={'32px'}
            bgColor="background.third"
            transform="translateY(-50%)"
            zIndex={-2}
          />

          <Box
            ref={progressRef}
            position="absolute"
            width={PROGRESS_BAR_WIDTH}
            top="50%"
            left="30px"
            height="4px"
            bgColor="background.white"
            borderRadius={'32px'}
            transform="translateY(-50%)"
            zIndex={-1}
            transition="width 0.1s ease"
            transformOrigin={'left center'}
          />
          <Flex
            ref={sliderRef}
            width={'56px'}
            height={'56px'}
            border={'1.5px solid'}
            borderColor={'border.white'}
            borderRadius={'50%'}
            position={'absolute'}
            left={0}
            top={'50%'}
            transform={'translateY(-50%)'}
            bgColor={'background.page'}
          >
            <Flex
              width={'44px'}
              height={'44px'}
              border={'1.5px solid'}
              borderRadius={'50%'}
              bgColor={'background.secondary'}
              color={'text.black'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              top={'50%'}
              left={'50%'}
              transform={'translate(-50%, -50%)'}
            >
              <AppHeading fontSize={'11px'}>
                {DEFAULT.TOKEN_PRE_SALE}
              </AppHeading>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={3} ref={cardsContainerRef}>
          {stepsCardsItems.map((item, i) => {
            const { descriptions, value, ...rest } = item;

            return (
              <Box
                key={i}
                ref={(el) => {
                  if (!el) return;
                  cardRefs.current[i] = el;
                }}
                zIndex={stepsCardsItems.length - i}
                opacity={i === 0 ? 1 : 0}
              >
                <AppCardDescriptions
                  ref={(el) => {
                    if (!el) return;
                    cardDescriptionRefs.current[i] = el;
                  }}
                  key={i}
                  descriptions={t(descriptions, { value: value })}
                  {...rest}
                  cardTitle={
                    item.titleHighlight && i < currentStep
                      ? HighlightText({
                          text: t(item.title, { value: value }),
                          highlight: t(item.titleHighlight),
                        })
                      : t(item.title, { value: value })
                  }
                  isHighlight={i >= currentStep}
                  isAnimated
                />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
