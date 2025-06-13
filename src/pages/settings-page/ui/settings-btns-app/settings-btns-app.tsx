import type { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Flex } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';

type SettingsBtnsAppProps = HTMLAttributes<HTMLDivElement> & {
  handleLogout: () => void;
};

export const SettingsBtnsApp = ({ handleLogout }: SettingsBtnsAppProps) => {
  const { t } = useTranslation();

  return (
    <Flex direction={'column'} gap={4}>
      {/* <Button variant={'outlineSm'} onClick={handleLogout}>
         {t(LOCAL_TEXT.BUTTON_SAVE)}
      </Button> */}
      <Button variant={'outlineSm'} onClick={handleLogout}>
        {t(LOCAL_TEXT.BUTTON_ACCOUNT_OUT)}
      </Button>
    </Flex>
  );
};
