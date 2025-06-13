import type React from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useStepsAppScrollAnimation } from './hooks/useStepsAppScrollAnimation';

import { Box, Flex, type FlexProps } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppIcon, type IconName } from '@/shared/ui/app-icon';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { PROGRESS_BAR_WIDTH } from './const';

type StepsAppProps = FlexProps & {
  titleSlot: string | React.ReactNode;
  stepsProgressBarItems: { iconName: IconName }[];

  stepsCardsItems: {
    iconName?: IconName;
    highlightIconName: IconName;
    title: string;
    description: string;
    highlight?: string;
    value?: string;
  }[];
};

export const StepsApp = ({
  titleSlot,

  stepsCardsItems,
  stepsProgressBarItems,
  ...props
}: StepsAppProps) => {
  const {
    containerRef,
    progressRef,
    iconRefs,
    cardRefs,
    currentStep,
    cardDescriptionRefs,
    cardsContainerRef,
  } = useStepsAppScrollAnimation({ cardsLength: stepsCardsItems.length });
  const { t } = useTranslation();

  const titleRef = useRef(null);
  const mainContainerRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: mainContainerRef });
    },
    { scope: containerRef }
  );

  return (
    <Flex ref={mainContainerRef} direction={'column'} gap={6} {...props}>
      <AppHeading ref={titleRef}>{titleSlot}</AppHeading>

      <Box ref={containerRef}>
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
            height="10px"
            bgColor="background.secondary"
            transform="translateY(-50%)"
            zIndex={-1}
            transition="width 0.1s ease"
            transformOrigin={'left center'}
          />

          {stepsProgressBarItems.map((item, i) => (
            <Box
              ref={(el) => {
                if (!el) return;
                iconRefs.current[i] = el;
              }}
              key={i}
              borderRadius={'full'}
              width={'60px'}
              height={'60px'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              bgColor={i === 0 ? 'background.secondary' : 'background.third'}
              zIndex={stepsProgressBarItems.length - i}
            >
              <AppIcon name={item.iconName} width={'36px'} height={'36px'} />
            </Box>
          ))}
        </Flex>
        <Flex direction={'column'} gap={3} ref={cardsContainerRef}>
          {stepsCardsItems.map((item, i) => (
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
                cardTitle={t(item.title, { value: item.value })}
                descriptions={
                  item.highlight && i < currentStep
                    ? HighlightText({
                        text: t(item.description, { value: item.value }),
                        highlight: t(item.highlight, { value: item.value }),
                      })
                    : HighlightText({
                        text: t(item.description),
                        highlight: '',
                      })
                }
                iconName={item.iconName}
                highlightIconName={item.highlightIconName}
                iconSize={{ width: 68, height: 68 }}
                isHighlight={i >= currentStep}
                isAnimated
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
