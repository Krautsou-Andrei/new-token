import { useTranslation } from 'react-i18next';

import { usePresaleTokenSum } from './hooks';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { DEFAULT, ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppHeading } from '@/shared/ui/typography/app-heading';

export const TokensSquaresApp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: user } = useAuthMe();
  const { state: presaleTokenState } = usePresaleTokenSum();

  return (
    <Flex gap={{ base: '16px' }}>
      <Flex
        justifyContent={'center'}
        background={'background.third'}
        py={'17px'}
        px={4}
        direction={'column'}
        rounded={'16px'}
        textAlign={'center'}
        gap={{ base: '12px' }}
        flexBasis={'50%'}
      >
        <AppHeading
          fontSize={{ base: '16px', md: '18px', lg: '22px' }}
          fontFamily={'Montserrat'}
        >
          {t(LOCAL_TEXT.WALLET_PAGE.TOKEN.BALANCE, { value: DEFAULT.TOKEN })}
        </AppHeading>
        {user?.balance && (
          <AppHeading fontSize={{ base: '16px', md: '18px', lg: '22px' }}>
            {formatNumberWithSpaces(user?.balance)}
          </AppHeading>
        )}
      </Flex>
      <Flex
        justifyContent={'center'}
        background={'transparent'}
        border={'1px solid'}
        borderColor={'background.secondary'}
        py={'17px'}
        px={4}
        direction={'column'}
        rounded={'16px'}
        textAlign={'center'}
        gap={{ base: '12px' }}
        flexBasis={'50%'}
      >
        <Text
          fontSize={{ base: '16px', md: '18px', lg: '22px' }}
          textStyle={'text_md_600'}
        >
          {t(LOCAL_TEXT.WALLET_PAGE.TOKEN.TOKEN_BALANCE, {
            value: DEFAULT.TOKEN_PRE_SALE,
          })}
        </Text>
        {presaleTokenState?.data?.tokenAmount && (
          <AppHeading fontSize={{ base: '16px', md: '18px', lg: '22px' }}>
            {formatNumberWithSpaces(presaleTokenState.data.tokenAmount)}
          </AppHeading>
        )}
        <Button
          variant={'primary'}
          onClick={() => navigate({ to: ROUTES.INVESTOR })}
        >
          {t(LOCAL_TEXT.BUTTON_BUY)}
        </Button>
      </Flex>
    </Flex>
  );
};
