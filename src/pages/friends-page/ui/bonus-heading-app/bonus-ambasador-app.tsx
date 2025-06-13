import { useTranslation } from 'react-i18next';

import { useTransactionSum } from './hooks/use-transaction-sum';

import { type FlexProps, Text } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppZipperCard } from '@/shared/ui/app-zipper-card';
import { AppHeading } from '@/shared/ui/typography/app-heading';

type BonusAmbasadorAppProps = FlexProps;

export const BonusAmbasadorApp = ({ ...props }: BonusAmbasadorAppProps) => {
  const { state } = useTransactionSum();
  const { t } = useTranslation();

  return (
    <AppZipperCard py={4} {...props}>
      <Text textStyle={'text_md_600'} color={'text.black'}>
        {t(LOCAL_TEXT.FRIENDS_PAGE.YOU_BONUS)}
      </Text>
      <AppHeading color={'text.black'}>{state.data?.amount || 0} XР</AppHeading>
    </AppZipperCard>
  );
};
