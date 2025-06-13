import { useTranslation } from 'react-i18next';

import { VerticalStepsApp } from '@/widgets/vertical-steps-app';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';

import { STEPS_CARDS_ITEMS } from './const';

export const TokenLaunchApp = () => {
  const { t } = useTranslation();

  return (
    <VerticalStepsApp
      titleSlot={HighlightText({
        text: t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_LAUNCH.TITLE.VALUE),
        highlight: t(LOCAL_TEXT.INVESTOR_PAGE.TOKEN_LAUNCH.TITLE.HIGHLIGHT),
      })}
      stepsCardsItems={STEPS_CARDS_ITEMS}
    />
  );
};
