import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { LoaderCircleApp } from './loader-circle-app';

export const DigitalMarketApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef1 = useRef(null);
  const subtitleRef2 = useRef(null);
  const subtitleRef3 = useRef(null);

  const descRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: subtitleRef1 });
      slideFromBottom({ ref: subtitleRef2 });
      slideFromBottom({ ref: subtitleRef3 });
      slideFromRight({ ref: descRef });
    },
    { scope: containerRef }
  );
  return (
    <Box ref={containerRef}>
      <AppHeading ref={titleRef} marginBottom={'24px'}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.DIGITAL_HEADING.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.DIGITAL_HEADING.HIGHLIGHT),
        })}
      </AppHeading>
      <Box textColor={'text.secondary'} marginBottom={'24px'}>
        <AppHeading ref={subtitleRef1} fontSize={'64px'}>
          $600
        </AppHeading>
        <AppHeading ref={subtitleRef2}>
          {t(LOCAL_TEXT.INVESTOR_PAGE.DIGITAL_SUB_HEADING.VALUE)}
        </AppHeading>
        <AppText ref={subtitleRef3} textStyle={'text_md_600'}>
          {t(LOCAL_TEXT.INVESTOR_PAGE.DIGITAL_SUB_HEADING.HIGHLIGHT)}
        </AppText>
      </Box>
      <Flex alignItems="center" gap="12px">
        <Box width="80px" height="80px">
          <LoaderCircleApp progress={10} />
        </Box>
        <AppText ref={descRef} textAlign="left">
          {HighlightText({
            text: t(LOCAL_TEXT.INVESTOR_PAGE.DIGITAL_MARKET.VALUE),
            highlight: t(LOCAL_TEXT.INVESTOR_PAGE.DIGITAL_MARKET.HIGHLIGHT),
          })}
        </AppText>
      </Flex>
    </Box>
  );
};
