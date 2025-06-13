import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, type ButtonProps } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';

export const ButtonInvestorApp = forwardRef<HTMLButtonElement, ButtonProps>(
  (_, ref) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
      <Button
        ref={ref}
        variant="outline"
        size={'sm'}
        fontSize={{ sm: '20px' }}
        onClick={() =>
          navigate({
            to: ROUTES.INVESTOR,
          })
        }
      >
        {t(LOCAL_TEXT.CREATOR_PAGE.BUTTON_INVESTOR)}
      </Button>
    );
  }
);
