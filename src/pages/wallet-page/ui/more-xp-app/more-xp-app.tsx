import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Flex, Text } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppCardBase } from '@/shared/ui/app-card-base';

export const MoreXpApp = () => {
  const [isOpen, setIsopen] = useState(false);
  const { t } = useTranslation();

  return (
    <AppCardBase
      title={t(LOCAL_TEXT.WALLET_PAGE.MORE_XP.TITLE, { value: DEFAULT.TOKEN })}
      descriptions={t(LOCAL_TEXT.WALLET_PAGE.MORE_XP.DESCRIPTIONS)}
    >
      {isOpen && (
        <Text textStyle={'text_xs_500'}>
          {t(LOCAL_TEXT.WALLET_PAGE.MORE_XP.XP, { value: DEFAULT.TOKEN })}
        </Text>
      )}
      <Flex justifyContent={'end'}>
        <Button
          px={5}
          variant={'outlineSm'}
          width={'fit-content'}
          onClick={() => setIsopen((prev) => !prev)}
        >
          {isOpen
            ? t(LOCAL_TEXT.WALLET_PAGE.MORE_XP.BUTTON.HIDE)
            : t(LOCAL_TEXT.WALLET_PAGE.MORE_XP.BUTTON.VIEW)}
        </Button>
      </Flex>
    </AppCardBase>
  );
};
