import { useTranslation } from 'react-i18next';

import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { DEFAULT, ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppCircleModal } from '@/shared/ui/app-circle-modal';

export const RejectedPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <AppCircleModal
        heading={t(LOCAL_TEXT.REJECT_PAGE.TITLE)}
        descriptions={t(LOCAL_TEXT.REJECT_PAGE.DESCRIPTIONS)}
        isOpen={true}
        onClose={() => {}}
        parentProps={{
          padding: '60px 0 0 0',
          background: 'background.orange',
        }}
      >
        <Flex direction={'column'} gap={2} width={'258px'}>
          <Button variant={'secondary'}>{t(LOCAL_TEXT.BUTTON_REPEAT)}</Button>
          {/* Надо будет создать отдельные кнопки потом */}
          <Button
            variant={'outline'}
            borderColor={'background.page'}
            textStyle={'text_sm_500'}
            fontFamily={'Montserrat'}
            fontWeight={'500'}
            fontSize={'15px'}
            color={'text.black'}
            onClick={() => (window.location.href = DEFAULT.INVESTOR)}
          >
            {t(LOCAL_TEXT.BUTTON_SUPPORT)}
          </Button>
          {/* Надо будет создать отдельные кнопки потом */}
          <Button
            background={'none'}
            textStyle={'text_xs_500'}
            fontFamily={'Montserrat'}
            fontWeight={'500'}
            fontSize={'15px'}
            height={'100%'}
            onClick={() => navigate({ to: ROUTES.APP })}
          >
            {t(LOCAL_TEXT.BUTTON_BACK)}
          </Button>
        </Flex>
      </AppCircleModal>
    </>
  );
};
