import type { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { useBuyTokenModal } from './hooks/use-buy-token-modal';

import { Button, Flex, Text } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { splitString } from '@/shared/lib/utils';
import { AppCircleModal } from '@/shared/ui/app-circle-modal';

type BuyTokenModalAppProps = HTMLAttributes<HTMLDivElement>;

export const BuyTokenModalApp = ({ ...props }: BuyTokenModalAppProps) => {
  const { state, functions } = useBuyTokenModal();
  const { t } = useTranslation();

  return (
    <AppCircleModal
      isOpen={state.isBuyTokenModalOpen}
      onClose={functions.closeBuyTokenModal}
      descriptions={t(LOCAL_TEXT.MODAL_BUY_TOKEN.DESCRIPTIONS)}
      heading={splitString(
        t(LOCAL_TEXT.MODAL_BUY_TOKEN.TITLE, { value: DEFAULT.TOKEN_PRE_SALE })
      )}
    >
      <Flex direction={'column'} alignItems={'center'} gap={3} {...props}>
        <Button
          onClick={() => {
            const link = state.link;
            if (link) {
              window.open(link, '_blank');
              functions.clearLinkPayment();
            }
          }}
          variant={'secondary'}
        >
          {t(LOCAL_TEXT.BUTTON_PAY)}
        </Button>
        <Text
          textStyle={'text_xs_500'}
          onClick={functions.closeBuyTokenModal}
          cursor={'pointer'}
        >
          {t(LOCAL_TEXT.BUTTON_BACK)}
        </Text>
      </Flex>
    </AppCircleModal>
  );
};
