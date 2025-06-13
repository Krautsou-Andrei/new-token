import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, type BoxProps } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { ButtonManagerSupportApp } from '@/widgets/buttons/button-manager-support-app';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { splitString } from '@/shared/lib/utils';
import { AppText } from '@/shared/ui/typography/app-text';

type SupportAppProps = BoxProps;

export const SupportApp = ({ ...props }: SupportAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: descRef });
      slideFromBottom({ ref: btnRef });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef} px={5} borderRadius={'20px'} {...props}>
      <AppText ref={descRef} marginBottom={4} textAlign={'center'}>
        {splitString(t(LOCAL_TEXT.INVESTOR_PAGE.SUPPORT))}
      </AppText>
      <ButtonManagerSupportApp ref={btnRef} />
    </Box>
  );
};
