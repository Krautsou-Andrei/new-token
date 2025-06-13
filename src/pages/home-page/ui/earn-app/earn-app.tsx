import { useTranslation } from 'react-i18next';

import { Flex, Text } from '@chakra-ui/react';
import { Link } from '@tanstack/react-router';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppCardChange } from '@/shared/ui/app-card-change';

import { EARNING_CARDS } from './const';

export const EarnApp = () => {
  const { t } = useTranslation();

  return (
    <Flex
      background={'background.third'}
      alignItems={'center'}
      direction={'column'}
      rounded={'16px'}
      p={4}
      gap={{ base: '16px' }}
    >
      <Text textStyle={'text_md_600'} color={'white'}>
        {t(LOCAL_TEXT.HOME_PAGE.HOW_TO_PICK_UP)}
      </Text>

      <Flex gap={{ base: '6px' }}>
        {EARNING_CARDS.map((card) => (
          <Link key={card.id} to={card.link}>
            <AppCardChange
              background={'background.primary'}
              iconName={card.iconName}
              descriptions={t(card.description)}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
