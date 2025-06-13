import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { DEFAULT, slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { CARDS } from './const';

export const WhatGivesTokenApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: descRef });
      slideFromLeftRight({ ref: itemRefs });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <AppHeading ref={titleRef} mb={4}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.TITLE.ONE.VALUE, {
            value: DEFAULT.TOKEN_PRE_SALE,
          }),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.TITLE.ONE.HIGHLIGHT,
            {
              value: DEFAULT.TOKEN_PRE_SALE,
            }
          ),
        })}
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.TITLE.TWO.VALUE),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.TITLE.TWO.HIGHLIGHT
          ),
        })}
      </AppHeading>
      <AppText ref={descRef} mb={6}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.WHAT_GIVES_TOKEN.DESCRIPTIONS, {
          value: DEFAULT.TOKEN_PRE_SALE,
        })}
      </AppText>
      <Flex direction={'column'} gap={3}>
        {CARDS.map((item, i) => {
          const { descriptions, value, ...rest } = item;

          return (
            <AppCardDescriptions
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              key={i}
              descriptions={t(descriptions, { value: value })}
              {...rest}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
