import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, type BoxProps } from '@chakra-ui/react';

import { StepsApp } from '@/widgets/steps-app';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';

import { STEPS_CARDS_ITEMS2, STEPS_PROGRESS_BAR_ITEMS2 } from './const';

export const FirstCommercialPlatformApp = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const { t } = useTranslation();

    return (
      <Box ref={ref} {...props}>
        <StepsApp
          titleSlot={HighlightText({
            text: t(LOCAL_TEXT.CREATOR_PAGE.FIRST_COMMERCIAL.TITLE.VALUE),
            highlight: t(
              LOCAL_TEXT.CREATOR_PAGE.FIRST_COMMERCIAL.TITLE.HIGHLIGHT
            ),
          })}
          stepsCardsItems={STEPS_CARDS_ITEMS2}
          stepsProgressBarItems={STEPS_PROGRESS_BAR_ITEMS2}
        />
      </Box>
    );
  }
);
