import type { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex } from '@chakra-ui/react';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppInput } from '@/shared/ui/app-input';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { ACC_INPUTS } from './const';

type AccFormAppProps = HTMLAttributes<HTMLDivElement> & {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AccFormApp = ({ handleOnChange }: AccFormAppProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <AppHeading
        textStyle={'text_md_500'}
        textAlign={'start'}
        mb={6}
        color={'white'}
      >
        {t(LOCAL_TEXT.SETTINGS_PAGE.ACCOUNT.TITLE)}
      </AppHeading>

      <Flex direction={'column'} gap={{ base: '16px' }}>
        {ACC_INPUTS.map((item) => (
          <AppInput
            onChange={handleOnChange}
            name={item.name}
            key={item.id}
            label={item.label}
          />
        ))}
      </Flex>
    </Box>
  );
};
