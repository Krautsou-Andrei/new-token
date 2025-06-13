import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, type ButtonProps } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';

export const ButtonBuyTokenApp = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { t } = useTranslation();

    return (
      <Button ref={ref} variant="primary" size={'sm'} {...props}>
        {t(LOCAL_TEXT.BUY_TOKEN)}
      </Button>
    );
  }
);
