import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, type ButtonProps } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';

export const ButtonManagerSupportApp = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((_, ref) => {
  const { t } = useTranslation();

  return (
    <Button
      ref={ref}
      variant="outline"
      size={'sm'}
      onClick={() => {
        // Через Link ссылка только к тексту приминяется
        window.location.href = 'https://t.me/hypefactory_inv';
      }}
    >
      {t(LOCAL_TEXT.BUTTON_MANAGER)}
    </Button>
  );
});
