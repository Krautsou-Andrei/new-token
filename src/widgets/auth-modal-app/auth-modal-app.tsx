import { type HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuthModal } from './hooks';

import { Button, Flex, Link } from '@chakra-ui/react';
import type { ReactNode } from '@tanstack/react-router';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { getAuthToken } from '@/shared/lib/persistance';
import { splitString } from '@/shared/lib/utils';
import { AppModal } from '@/shared/ui/app-modal';
import { AppSpiner } from '@/shared/ui/app-spiner';
import { AppText } from '@/shared/ui/typography/app-text';

import { BUTTONS_AUTH, HANDLE_AUTH } from './const';

type AuthModalAppProps = HTMLAttributes<HTMLDivElement> & {
  isButtonClose?: boolean;
};

export const AuthModalApp = ({
  isButtonClose,
  ...props
}: AuthModalAppProps) => {
  const { state, functions } = useAuthModal();
  const { t } = useTranslation();

  const token = getAuthToken();

  const authMethods = {
    // [HANDLE_AUTH.GOOGLE]: functions.handleGoogleAuth,
    [HANDLE_AUTH.SOLANA]: functions.handleSolanaAuth,
    [HANDLE_AUTH.TELEGRAM]: functions.handleTelegramAuth,
  };

  return (
    <>
      {state.isLoading && <AppSpiner />}
      <AppModal
        title={
          splitString(
            t(LOCAL_TEXT.MODAL_AUTH.TITLE, { value: DEFAULT.TOKEN })
          ) as ReactNode
        }
        isOpen={state.isAuthModalOpen}
        onClose={functions.closeAuthModal}
        descriptions={t(LOCAL_TEXT.MODAL_AUTH.DESCRIPTIONS)}
        isNotClose={!isButtonClose && !token}
      >
        {/* <div className="">{`errorMessage:  ${state.errorMessageCode}`}</div>
        <div className="">{`erros:  ${state.error}`}</div>
        <div className="">{`data:  ${state.data}`}</div> */}
        <Flex direction={'column'} gap={3} {...props}>
          {BUTTONS_AUTH.map((button) => (
            <Button
              key={button.id}
              onClick={authMethods[button.handle]}
              variant={button.vatian}
            >
              {button.textButton}
            </Button>
          ))}
        </Flex>

        <AppText mt={6} textStyle={'text_md_500'} fontSize={'14px'}>
          {t(LOCAL_TEXT.MODAL_AUTH.PRIVATE_POLICY.VALUE)}{' '}
          <Link href="/privacy-policy" textDecoration={'underline'}>
            {t(LOCAL_TEXT.MODAL_AUTH.PRIVATE_POLICY.LINK)}
          </Link>{' '}
          {t(LOCAL_TEXT.MODAL_AUTH.PRIVATE_POLICY.VALUE_SECOND)}
        </AppText>
      </AppModal>
    </>
  );
};
