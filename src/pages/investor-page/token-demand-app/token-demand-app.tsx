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

import { CircleApp } from './circle-app';
import { CARDS } from './const';

export const TokenDemandApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef1 = useRef(null);
  const circleRef = useRef(null);
  const descRef2 = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descRef3 = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: descRef1 });
      slideFromBottom({ ref: circleRef, start: 'top center+=100' });
      slideFromBottom({ ref: descRef2 });
      slideFromLeftRight({ ref: itemRefs });
      slideFromBottom({ ref: descRef3 });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <AppHeading ref={titleRef} marginBottom={'16px'}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <AppText ref={descRef1} marginBottom={'24px'}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.SUB_TITLE.ONE)}
      </AppText>
      <CircleApp ref={circleRef} />
      <AppText ref={descRef2} marginBottom={'24px'}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.SUB_TITLE.TWO, {
          value: DEFAULT.TOKEN_PRE_SALE,
        })}
      </AppText>
      <Flex direction={'column'} gap={'12px'} marginBottom={'24px'}>
        {CARDS.map((item, i) => {
          const { descriptions, ...rest } = item;
          return (
            <AppCardDescriptions
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              key={i}
              descriptions={t(descriptions)}
              {...rest}
            />
          );
        })}
      </Flex>
      <AppText ref={descRef3}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_DEMAND.FOOTER)}
      </AppText>
    </Box>
  );
};
