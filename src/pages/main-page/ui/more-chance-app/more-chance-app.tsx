import { useTranslation } from 'react-i18next';

import type { BoxProps } from '@chakra-ui/react';

import { StepsApp } from '@/widgets/steps-app';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';

import { STEPS_CARDS_ITEMS2, STEPS_PROGRESS_BAR_ITEMS1 } from './const';

type MoreChanceAppProps = {} & BoxProps;

export const MoreChanceApp = ({ ...props }: MoreChanceAppProps) => {
  const { t } = useTranslation();

  return (
    <StepsApp
      titleSlot={HighlightText({
        text: t(LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.TITLE.VALUE, {
          value: DEFAULT.TOKEN,
        }),
        highlight: t(LOCAL_TEXT.CREATOR_PAGE.MORE_CHANCE.TITLE.HIGHLIGHT),
      })}
      stepsCardsItems={STEPS_CARDS_ITEMS2}
      stepsProgressBarItems={STEPS_PROGRESS_BAR_ITEMS1}
      {...props}
    />
  );
};
