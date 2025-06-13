import type { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { splitString } from '@/shared/lib/utils';
import { AppCircleModal } from '@/shared/ui/app-circle-modal';

type MessageModalAppProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
};

export const MessageModalApp = ({ onClose, isOpen }: MessageModalAppProps) => {
  const { t } = useTranslation();

  return (
    <AppCircleModal
      isOpen={isOpen}
      onClose={onClose}
      heading={splitString(t(LOCAL_TEXT.WALLET_PAGE.MODAL.TITLE))}
      descriptions={splitString(
        t(LOCAL_TEXT.WALLET_PAGE.MODAL.DESCRIPTIONS, {
          value: DEFAULT.TOKEN_PRE_SALE,
        })
      )}
    >
      <Button onClick={onClose} variant={'secondary'} width={'fit-content'}>
        {t(LOCAL_TEXT.BUTTON_UNDERSTAND)}
      </Button>
    </AppCircleModal>
  );
};
