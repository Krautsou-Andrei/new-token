import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { H2eCircleApp } from '@/widgets/h2e-circle-app/h2e-circle-app';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

export const PreSaleOpenApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const h2eRef = useRef(null);
  const descRef2 = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: descRef });
      slideFromBottom({ ref: h2eRef });
      slideFromBottom({ ref: descRef2 });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <AppHeading ref={titleRef} mb={3}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <AppText ref={descRef} mb={6}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.DESCRIPTION.ONE.VALUE),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.DESCRIPTION.ONE.HIGHLIGHT
          ),
        })}
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.DESCRIPTION.TWO.VALUE),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.DESCRIPTION.TWO.HIGHLIGHT
          ),
        })}
      </AppText>
      <H2eCircleApp ref={h2eRef} mb={6} />
      <AppText ref={descRef2}>
        {HighlightText({
          text: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.PRE_SALE_OPEN_CARD.ONE.VALUE
          ),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.PRE_SALE_OPEN_CARD.ONE
              .HIGHLIGHT
          ),
        })}
        {HighlightText({
          text: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.PRE_SALE_OPEN_CARD.TWO.VALUE
          ),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.PRE_SALE_OPEN_CARD.TWO
              .HIGHLIGHT
          ),
        })}
        {HighlightText({
          text: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.PRE_SALE_OPEN_CARD.THREE
              .VALUE
          ),
          highlight: t(
            LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE_OPEN.PRE_SALE_OPEN_CARD.THREE
              .HIGHLIGHT
          ),
        })}
      </AppText>
    </Box>
  );
};
