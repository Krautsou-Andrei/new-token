import { useTranslation } from 'react-i18next';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';

import { ThreeBlocksApp } from '../three-blocks-app';

export const PreSaleApp = () => {
  const { t } = useTranslation();

  return (
    <ThreeBlocksApp
      titleSlot={
        <>
          {HighlightText({
            text: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE.TITLE.VALUE),
            highlight: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE.TITLE.HIGHLIGHT),
          })}
        </>
      }
      desc={t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE.DESCRIPTION)}
      items={[
        {
          iconName: 'icon/blockchain',
          desc: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE.PRE_SALE_CARD.ONE),
        },
        {
          iconName: 'icon/card-coin',
          desc: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE.PRE_SALE_CARD.TWO),
        },
        {
          iconName: 'icon/usd-coin',
          desc: t(LOCAL_TEXT.INVESTOR_PAGE.PRE_SALE.PRE_SALE_CARD.THREE),
        },
      ]}
    />
  );
};
