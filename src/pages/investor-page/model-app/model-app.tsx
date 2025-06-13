import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useCircularAnimation } from './hooks/useAnimation';

import { Box, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { CircularIconsApp } from './circular-icons-app';
import { STEPS_CARDS_ITEMS } from './const';

export const ModelApp = () => {
  const { t } = useTranslation();

  const { iconsRef, arrowsRef, cardsRef, step } = useCircularAnimation();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const circularRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: circularRef });
      slideFromLeftRight({ ref: itemRefs });
    },
    { scope: containerRef }
  );
  return (
    <Box ref={containerRef}>
      <AppHeading ref={titleRef} marginBottom={'24px'}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.MODEL_TITLE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.MODEL_TITLE.HIGHLIGHT),
        })}
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.MODEL_SUB_TITLE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.MODEL_SUB_TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <CircularIconsApp
        ref={circularRef}
        step={step}
        iconsRef={iconsRef}
        arrowsRef={arrowsRef}
        marginBottom={6}
      />
      <Flex direction={'column'} gap={3}>
        {STEPS_CARDS_ITEMS.map((item, i) => {
          const { cardTitle, descriptions, ...rest } = item;

          return (
            <AppCardDescriptions
              ref={(el) => {
                cardsRef.current[i] = el;
                itemRefs.current[i] = el;
              }}
              key={i}
              cardTitle={t(cardTitle)}
              descriptions={t(descriptions)}
              {...rest}
              isHighlight={step === i}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
