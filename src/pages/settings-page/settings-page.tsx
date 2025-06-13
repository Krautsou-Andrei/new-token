import { useTranslation } from 'react-i18next';

import { useSettings } from './hooks';

import { Flex } from '@chakra-ui/react';

import { useProtected } from '@/features/auth/hook/use-protected';

import { LanguageSwitc2hApp } from '@/widgets/language-switch2-app';
import { NavLayoutPanel } from '@/widgets/nav-layout/nav-layout-panel';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppSpiner } from '@/shared/ui/app-spiner';
import { AppExtraSmallText } from '@/shared/ui/typography/app-extra-small-text';
import { AppPageHeading } from '@/shared/ui/typography/app-page-heading';

// import { AccFormApp } from './ui/acc-form-app';
import { ProfileTopApp } from './ui/profile-top-app';
import { SettingsBtnsApp } from './ui/settings-btns-app';

export const SettingsPage = () => {
  useProtected();
  const { state, functions } = useSettings();

  const { t } = useTranslation();

  return (
    <AppLayoutBound pb={'104px'}>
      <AppPageHeading handleBack={functions.handleBackToHome} isBack>
        {t(LOCAL_TEXT.SETTINGS_PAGE.TITLE)}
      </AppPageHeading>

      <Flex direction={'column'} pt={'56px'} gap={{ base: '56px' }}>
        <ProfileTopApp
          username={state.profile?.username}
          handleOnChange={functions.handleOnChange}
        />
        {/* <AccFormApp handleOnChange={functions.handleOnChange} /> */}
        <Flex direction={'column'} gap={3}>
          <AppExtraSmallText>
            {' '}
            {t(LOCAL_TEXT.SETTINGS_PAGE.LANGUAGE)}
          </AppExtraSmallText>
          <LanguageSwitc2hApp />
        </Flex>

        <SettingsBtnsApp handleLogout={functions.handleLogout} />
      </Flex>

      <NavLayoutPanel />
      {state.isLoading && <AppSpiner />}
    </AppLayoutBound>
  );
};
