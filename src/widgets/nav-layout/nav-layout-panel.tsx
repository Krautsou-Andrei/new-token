import { useTranslation } from 'react-i18next';

import { Box, Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from '@tanstack/react-router';

import { AppIcon } from '@/shared/ui/app-icon';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { NAV_ITEMS } from './const';

export const NavLayoutPanel = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <AppLayoutBound
      position={'fixed'}
      bottom={0}
      left={'50%'}
      transform={'translateX(-50%)'}
      width={'full'}
      height={84}
      background={'background.page'}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'full'}
      >
        {NAV_ITEMS.map((item) => (
          <Link key={item.id} to={item.href}>
            <Flex
              cursor={'pointer'}
              direction={'column'}
              alignItems={'center'}
              gap={{ base: '8px' }}
              flex={'1 1 20%'}
            >
              <Box>
                <AppIcon
                  // text.green100 не хочет работать. Потом фиксануть
                  color={`${location.pathname === item.href ? '#B6FB0D' : ''}`}
                  name={item.iconName}
                />
              </Box>
              <Text
                color={`${location.pathname === item.href ? 'text.secondary' : ''}`}
                textStyle={'text_xs_500'}
                fontSize={'12px'}
              >
                {t(item.title)}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </AppLayoutBound>
  );
};
