import { useTranslation } from 'react-i18next';

import { Button } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardWay } from '@/shared/ui/app-card-way';

export const BuyTokenApp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <AppCardWay
      textAlign={'center'}
      descriptions={HighlightText({
        text: t(LOCAL_TEXT.HOME_PAGE.BECOME_INVESTOR.VALUE),
        highlight: t(LOCAL_TEXT.HOME_PAGE.BECOME_INVESTOR.HIGHLIGHT),
      })}
    >
      <Button size={'sm'} onClick={() => navigate({ to: ROUTES.INVESTOR })}>
        {t(LOCAL_TEXT.BUY_TOKEN)}
      </Button>
    </AppCardWay>
  );
};
