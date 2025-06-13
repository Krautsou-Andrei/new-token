import { useTranslation } from 'react-i18next';

import { Box } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';

import { ThreeBlocksApp } from '../three-blocks-app';
import { ITEMS } from './const';
import { TokenInterestApp } from './token-interest-app';

export const UtilityApp = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <ThreeBlocksApp
        mb={6}
        variant="left"
        titleSlot={
          <>
            {HighlightText({
              text: t(LOCAL_TEXT.INVESTOR_PAGE.UTILITY.TITLE.ONE.VALUE, {
                value: DEFAULT.TOKEN_PRE_SALE,
              }),
              highlight: t(
                LOCAL_TEXT.INVESTOR_PAGE.UTILITY.TITLE.ONE.HIGHLIGHT,
                {
                  value: DEFAULT.TOKEN_PRE_SALE,
                }
              ),
            })}
            {HighlightText({
              text: t(LOCAL_TEXT.INVESTOR_PAGE.UTILITY.TITLE.TWO.VALUE),
              highlight: t(
                LOCAL_TEXT.INVESTOR_PAGE.UTILITY.TITLE.TWO.HIGHLIGHT
              ),
            })}
          </>
        }
        desc={t(LOCAL_TEXT.INVESTOR_PAGE.UTILITY.DESCRIPTIONS)}
        items={ITEMS}
      />
      <TokenInterestApp />
    </Box>
  );
};
