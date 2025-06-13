import { useTranslation } from 'react-i18next';

import { Box, type BoxProps, Input, Text } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { ReferralButtonApp } from '@/shared/ui/referral-button-app/referral-button-app';
import { AppExtraSmallText } from '@/shared/ui/typography/app-extra-small-text';

type BlockAppProps = {
  title?: string;
  description: React.ReactNode;
  textToCopy?: string;
  isTextArea?: boolean;
  isInput?: boolean;
  value?: string;
  onChangeInput?: (v: string) => void;
  placeholder?: string;
  isIncorrectVideoUrl?: boolean;
} & BoxProps;

export const BlockApp = ({
  title,
  description,
  textToCopy = '',
  isTextArea,
  isInput,
  value,
  onChangeInput,
  placeholder,
  isIncorrectVideoUrl,
  ...props
}: BlockAppProps) => {
  const { t } = useTranslation();
  return (
    <Box {...props} bgColor={'background.third'} p={4} borderRadius={'xxl'}>
      {title && (
        <Text textStyle={'text_md_600'} mb={4}>
          {title}
        </Text>
      )}

      <Text textStyle={'text_md_600'} fontSize={'16px'} mb={4}>
        {description}
      </Text>
      {isInput && onChangeInput ? (
        <>
          <Input
            value={value}
            onChange={(event) => onChangeInput(event.target.value)}
            placeholder={placeholder}
          />
          {!isIncorrectVideoUrl &&
            value?.length !== undefined &&
            value.length > 0 && (
              <AppExtraSmallText
                textColor={'text.error'}
                mb={4}
                fontSize={'14px'}
              >
                {t(
                  LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_ONE.LINK_TIK_TOK
                )}
              </AppExtraSmallText>
            )}
        </>
      ) : (
        <ReferralButtonApp isTextArea={isTextArea} link={textToCopy} />
      )}
    </Box>
  );
};
