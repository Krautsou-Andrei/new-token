import { useTranslation } from 'react-i18next';

import { Box, Flex, Text } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppIcon } from '@/shared/ui/app-icon';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';

type CardAppProps = {
  nick?: string | null;
  isMe?: boolean;
  position?: number;
  uploadedAmount: number;
  isAhead?: boolean;
};
export const CardApp = ({
  nick,
  isMe,
  position,
  uploadedAmount,
  isAhead,
}: CardAppProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      padding={'16px'}
      gap={'12px'}
      bgColor={'background.primary'}
      borderRadius={'16px'}
      border={'1px solid'}
      borderColor={isMe ? 'border.primary' : 'transparent'}
    >
      <Box
        rounded={'50%'}
        flex={'0 0 48px'}
        width={'48px'}
        height={'48px'}
        overflow={'hidden'}
      >
        <AppIcon name="icon/userGrey" width={'100%'} height={'100%'} />
      </Box>
      <Box width={'100%'}>
        <Flex
          justifyContent={'space-between'}
          alignContent={'center'}
          marginBottom={'4px'}
        >
          <AppSmallText>{nick || t(LOCAL_TEXT.YOU)}</AppSmallText>

          <Flex gap={'8px'} alignItems={'center'}>
            <Text
              textStyle={'text_md_600'}
              textColor={isMe ? 'text.secondary' : ''}
            >
              {uploadedAmount}
            </Text>
            <AppIcon name={'icon/video_green'} width={'24px'} height={'24px'} />
          </Flex>
        </Flex>
        <Text
          textAlign={'left'}
          textStyle={'text_xs_500'}
          textColor={isMe ? '' : 'background.fourth'}
        >
          {isMe
            ? HighlightText({
                text: t(LOCAL_TEXT.INCOME_PAGE.LIDER_BOARD_CARD.VALUE, {
                  value: position,
                }),
                highlight: t(
                  LOCAL_TEXT.INCOME_PAGE.LIDER_BOARD_CARD.HIGHLIGHT,
                  { value: position }
                ),
              })
            : isAhead
              ? t(LOCAL_TEXT.INCOME_PAGE.FORWARD_YOU)
              : t(LOCAL_TEXT.INCOME_PAGE.LOST_YOU)}
        </Text>
      </Box>
    </Flex>
  );
};
