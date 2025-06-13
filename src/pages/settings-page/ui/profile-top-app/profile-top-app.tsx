import { type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppChoosePhoto } from '@/shared/ui/app-choose-photo';
import { AppInput } from '@/shared/ui/app-input';

type ProfileTopAppProps = HTMLAttributes<HTMLDivElement> & {
  username: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ProfileTopApp = ({
  handleOnChange,
  username,
}: ProfileTopAppProps) => {
  const { t } = useTranslation();

  return (
    <Flex gap={{ base: '44px' }} alignItems={'center'}>
      <AppChoosePhoto />
      <AppInput
        name="username"
        label={t(LOCAL_TEXT.SETTINGS_PAGE.PROFILE.LABEL)}
        placeholder={t(LOCAL_TEXT.SETTINGS_PAGE.PROFILE.PLACHOLDER)}
        value={username}
        onChange={handleOnChange}
      />
    </Flex>
  );
};
