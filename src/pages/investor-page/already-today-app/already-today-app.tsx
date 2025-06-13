import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

export const AlreadyTodayApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: containerRef });
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: descRef });
    },
    { scope: containerRef }
  );
  return (
    <Box
      padding="20px"
      borderRadius={'20px'}
      border={'1px solid'}
      borderColor={'background.secondary'}
      ref={containerRef}
    >
      <AppHeading ref={titleRef} marginBottom={'16px'}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.ALREADY.VALUE),
          highlight: [
            t(LOCAL_TEXT.INVESTOR_PAGE.ALREADY.HIGHLIGHT.ONE),
            t(LOCAL_TEXT.INVESTOR_PAGE.ALREADY.HIGHLIGHT.TWO),
          ],
        })}
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.ALREADY_PRICE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.ALREADY_PRICE.HIGHLIGHT),
        })}
      </AppHeading>
      <AppText ref={descRef} textColor={'text.descriptions'}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.ALREADY_BUILD)}
      </AppText>
    </Box>
  );
};
