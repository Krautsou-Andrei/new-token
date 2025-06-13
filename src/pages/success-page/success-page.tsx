import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { DEFAULT, ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { AppCelebration } from '@/shared/ui/app-celebration';
import { AppCircleModal } from '@/shared/ui/app-circle-modal';

export const SuccessPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { setIsConfety } = useModalStore();

  useEffect(() => {
    setIsConfety(true);
  }, [setIsConfety]);

  return (
    <>
      <AppCelebration />
      <AppCircleModal
        heading={t(LOCAL_TEXT.SUCCESS_PAGE.TITLE)}
        descriptions={t(LOCAL_TEXT.SUCCESS_PAGE.DESCRIPTIONS)}
        isOpen={true}
        onClose={() => {}}
        parentProps={{
          padding: '104px 0 0 0',
        }}
      >
        <Button
          onClick={() => (window.location.href = DEFAULT.INVESTOR)}
          variant={'secondary'}
          width={'fit-content'}
          textTransform={'inherit'}
          fontWeight={'500'}
          fontSize={'18px'}
          px={8}
        >
          {t(LOCAL_TEXT.BUTTON_SUPPORT)}
        </Button>
        <Button
          onClick={() => navigate({ to: ROUTES.APP })}
          textTransform={'inherit'}
          background={'transparent'}
          fontWeight={'500'}
          fontSize={'18px'}
          border={'1px solid'}
          borderColor={'background.page'}
          width={'fit-content'}
          px={8}
        >
          {t(LOCAL_TEXT.BUTTON_HOME)}
        </Button>
      </AppCircleModal>
    </>
  );
};
