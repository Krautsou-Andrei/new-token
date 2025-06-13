import { useTranslation } from 'react-i18next';

import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';

import { DEFAULT, ROUTES } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { getAuthToken, useAuthStore } from '@/shared/lib/persistance';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppIcon } from '@/shared/ui/app-icon';

import { useHomePage } from '../../hooks';

export const ProfileLineApp = () => {
  const { state } = useHomePage();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { openAuthModal } = useAuthStore();

  const token = getAuthToken();

  return (
    <Flex justifyContent={'space-between'}>
      <Flex gap={{ base: '12px' }}>
        {state.user && state.user.image ? (
          <Avatar
            boxSize={12}
            name={state.user.username}
            src={DEFAULT.BYBIT_ABRAMOV}
            cursor={'pointer'}
            onClick={() =>
              token ? navigate({ to: ROUTES.SETTINGS }) : openAuthModal()
            }
          />
        ) : (
          <AppIcon
            name="app/not-user"
            width={48}
            height={48}
            cursor={'pointer'}
            onClick={() =>
              token ? navigate({ to: ROUTES.SETTINGS }) : openAuthModal()
            }
          />
        )}

        {state.user && (
          <Flex
            textStyle={{ base: 'text_xs_smal_500', sm: 'text_xs_500' }}
            justifyContent={'center'}
            direction={'column'}
            gap={{ base: '4px' }}
          >
            <Text color={'text.grey100'} display={'block'}>
              {t(LOCAL_TEXT.HOME_PAGE.GOOD_MORNING)},
            </Text>
            {state.user.userInfo.username || state.user.username}
          </Flex>
        )}
      </Flex>

      <Flex
        gap={{ base: '8px' }}
        py={1.5}
        pl={4}
        pr={2}
        border={'1px solid'}
        borderColor={'border.primary'}
        alignItems={'center'}
        rounded="100px"
        textStyle={{ base: 'text_xs_600', sm: 'text_md_600' }}
        color={'text.secondary'}
        cursor={'pointer'}
        onClick={() => navigate({ to: ROUTES.WALLET })}
      >
        {formatNumberWithSpaces(state.user ? Number(state.user.balance) : 0)}
        <AppIcon name="icon/points" width={36} height={36} />
      </Flex>
    </Flex>
  );
};
