import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { PatternBlockApp } from '@/widgets/pattern-block-app/pattern-block-app';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { ThreeBlocksApp } from '../three-blocks-app';
import { ITEMS } from './const';

export const RiskApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const patternRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: patternRef });
      slideFromBottom({ ref: descRef });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <PatternBlockApp
        ref={patternRef}
        justifyContent={'center'}
        alignItems={'center'}
        mb={6}
      >
        <AppIcon name="icon/danger" width={48} height={48} />
        <AppHeading>
          {HighlightText({
            text: t(LOCAL_TEXT.INVESTOR_PAGE.RISK.TITLE.VALUE),
            highlight: t(LOCAL_TEXT.INVESTOR_PAGE.RISK.TITLE.HIGHLIGHT),
          })}
        </AppHeading>
      </PatternBlockApp>

      <ThreeBlocksApp
        marginBottom={'24px'}
        desc={HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.RISK.DESCRIPTIONS.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.RISK.DESCRIPTIONS.HIGHLIGHT),
        })}
        items={ITEMS}
      />
      <AppText ref={descRef}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.RISK.NOT_GARANTY)}
      </AppText>
    </Box>
  );
};
