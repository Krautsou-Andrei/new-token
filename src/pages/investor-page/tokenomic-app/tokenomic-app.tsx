import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { STEPS_CARDS_ITEMS } from './const';
import { SliderApp } from './slider-app';

export const TokenomicApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const graphRef = useRef(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: graphRef });
      slideFromLeftRight({ ref: itemRefs });
    },
    { scope: containerRef }
  );

  return (
    <Flex ref={containerRef} direction={'column'} gap={'24px'}>
      <AppHeading ref={titleRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.TOKENOMIC.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.TOKENOMIC.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <SliderApp
        stepsCardsItems={STEPS_CARDS_ITEMS}
        cardsLength={STEPS_CARDS_ITEMS.length}
      />
    </Flex>
  );
};
