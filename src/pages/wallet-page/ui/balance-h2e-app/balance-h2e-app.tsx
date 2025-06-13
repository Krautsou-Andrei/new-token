import { useTranslation } from 'react-i18next';

import { Link } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppCardBase } from '@/shared/ui/app-card-base';

export const BalanceH2eApp = () => {
  const { t, i18n } = useTranslation();

  return (
    <AppCardBase
      title={t(LOCAL_TEXT.WALLET_PAGE.BALANCE.TITLE, {
        value: DEFAULT.TOKEN_PRE_SALE,
      })}
      descriptions={
        <>
          {t(LOCAL_TEXT.WALLET_PAGE.BALANCE.DESCRIPTIONS)}{' '}
          <Link
            href={
              i18n.language === 'ru' ? DEFAULT.TG_CHANEL : DEFAULT.TG_CHANEL_ENG
            }
            target="_blank"
            color="text.secondary"
            textDecoration={'underline'}
          >
            {t(LOCAL_TEXT.WALLET_PAGE.BALANCE.DESCRIPTIONS_LINK)}
          </Link>
        </>
      }
    />
  );
};
