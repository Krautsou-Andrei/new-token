import type { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex, Text } from '@chakra-ui/react';

import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { formatDateDots } from '@/shared/lib/utils';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

import { AppIcon } from '../app-icon';

type AppUserCardProps = HTMLAttributes<HTMLParagraphElement> & {
  name: string;
  date?: string;
  iconName?: string;
  points?: number;
};

export const AppUserCard = ({ name, date, points }: AppUserCardProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      p={'16px'}
      gap={'12px'}
      bgColor={'background.primary'}
      rounded={'16px'}
    >
      <Box rounded={'50%'} width={'48px'} height={'48px'} overflow={'hidden'}>
        <AppIcon name="icon/userGrey" width={'100%'} height={'100%'} />
      </Box>

      <Flex direction={'column'} gap={'4px'} flex={'1 0 auto'}>
        <AppSmallText>{name}</AppSmallText>

        <Flex
          textStyle={'text_xs_500'}
          gap={'10px'}
          justifyContent={'space-between'}
        >
          {date && (
            <Text color={'text.fourth'}>
              {t(LOCAL_TEXT.FRIENDS_PAGE.JOINED, {
                value: formatDateDots(new Date(date)),
              })}
            </Text>
          )}

          <Text color={'text.secondary'}>
            +{points} {DEFAULT.TOKEN}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
