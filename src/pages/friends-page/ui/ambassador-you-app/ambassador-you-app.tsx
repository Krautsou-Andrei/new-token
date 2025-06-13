import { useTranslation } from 'react-i18next';

import { Flex, type FlexProps, Text } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { AMBASSADOR_CARDS } from './const';

type AmbassadorYouAppProps = FlexProps;

export const AmbassadorYouApp = ({ ...props }: AmbassadorYouAppProps) => {
  const { t } = useTranslation();

  return (
    <Flex direction={'column'} gap={'24px'} {...props}>
      <Flex direction={'column'} gap={6} alignItems={'center'}>
        <AppHeading>
          {HighlightText({
            text: t(LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR.VALUE),
            highlight: t(LOCAL_TEXT.FRIENDS_PAGE.AMBASADOR.HIGHLIGHT),
          })}
        </AppHeading>
        <Text textStyle={'text_sm_500'} textAlign={'center'}>
          {t(LOCAL_TEXT.FRIENDS_PAGE.INVITE)}
        </Text>
      </Flex>

      <Flex direction={'column'} gap={'16px'}>
        {AMBASSADOR_CARDS.map((card) => (
          <AppCardDescriptions
            key={card.id}
            descriptions={HighlightText({
              text: t(card.descriptions),
              highlight: t(card.highlight),
            })}
            iconName={card.iconName}
            iconSize={{ width: 60, height: 60 }}
            gap={3}
          />
        ))}
      </Flex>
    </Flex>
  );
};
