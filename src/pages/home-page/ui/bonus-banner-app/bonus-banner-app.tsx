import { useTranslation } from 'react-i18next';

import { Button } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { splitString } from '@/shared/lib/utils';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppZipperCard } from '@/shared/ui/app-zipper-card';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

import { useHomePage } from '../../hooks';

export const BonusBannerApp = () => {
  const { state, functions } = useHomePage();
  const { t } = useTranslation();

  return (
    <AppZipperCard>
      <AppHeading fontSize={'24px'} color={'text.black'}>
        {splitString(t(LOCAL_TEXT.HOME_PAGE.DAILY_BONUS))}
      </AppHeading>

      {state.isClaimed ? (
        <AppSmallText color={'text.black'}>
          {t(LOCAL_TEXT.HOME_PAGE.GO_TO_TOMORROW)}
        </AppSmallText>
      ) : (
        <Button
          width={'fit-content'}
          variant="secondarySm"
          px={8}
          py={4}
          onClick={functions.handleGiveMeBohus}
          disabled={state.isClaimed}
        >
          {`${t(LOCAL_TEXT.HOME_PAGE.TAKE)} ${formatNumberWithSpaces(state.checkin?.reward || DEFAULT.TASK_CHEKING)} ${DEFAULT.TOKEN}`}
        </Button>
      )}
    </AppZipperCard>
  );
};
