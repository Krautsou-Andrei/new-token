import type React from 'react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useStepsAppScrollAnimation } from './hooks/useStepsAppScrollAnimation';

import { Box, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { HighlightText } from '@/shared/lib/utils';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

type StepsAppProps = {
  titleSlot: string | React.ReactNode;

  stepsCardsItems: {
    description: string;
    highlight?: string | string[];
  }[];
};

export const VerticalStepsApp = ({
  titleSlot,
  stepsCardsItems,
}: StepsAppProps) => {
  const {
    containerRef,
    progressRef,
    iconRefs,
    cardRefs,
    currentStep,
    cardsContainerRef,
  } = useStepsAppScrollAnimation({ cardsLength: stepsCardsItems.length });

  const { t } = useTranslation();

  const titleRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (progressRef.current && cardRefs.current[4]) {
      const lastCardHeight = cardRefs.current[4].offsetHeight;

      progressRef.current.style.height = `calc(100% - ${lastCardHeight}px)`;
    }
  }, [cardRefs, progressRef, stepsCardsItems]);

  return (
    <Flex direction={'column'} gap={6}>
      <AppHeading ref={titleRef}>{titleSlot}</AppHeading>
      <Flex ref={containerRef} gap={3}>
        <Flex
          direction={'column'}
          position={'relative'}
          gap={10.5}
          ref={cardsContainerRef}
        >
          <Box
            position="absolute"
            top="1px"
            left={3}
            width={2.5}
            bgColor="background.third"
            zIndex={-2}
          />

          <Box
            ref={progressRef}
            position="absolute"
            width={2.5}
            top="1px"
            left={3}
            bgColor="background.secondary"
            zIndex={-1}
            transition="width 0.1s ease"
            transformOrigin={'top center'}
          />
          {stepsCardsItems.map((item, i) => (
            <Flex gap={3} key={i}>
              <Box
                ref={(el) => {
                  if (!el) return;
                  iconRefs.current[i] = el;
                }}
                key={i}
                borderRadius={'full'}
                minW={8}
                height={8}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bgColor={i === 0 ? 'background.secondary' : 'background.third'}
              >
                <AppHeading
                  textColor={'text.black'}
                  lineHeight={'none'}
                  marginTop={'-2px'}
                >
                  {i + 1}
                </AppHeading>
              </Box>
              <Box
                ref={(el) => {
                  if (!el) return;
                  cardRefs.current[i] = el;
                }}
                zIndex={stepsCardsItems.length - i}
                opacity={i === 0 ? 1 : 0}
              >
                <AppSmallText>
                  {item.highlight && i < currentStep
                    ? HighlightText({
                        text: t(item.description),
                        highlight: t(item.highlight),
                      })
                    : HighlightText({
                        text: t(item.description),
                        highlight: '',
                      })}
                </AppSmallText>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
