import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppTag } from '@/shared/ui/app-tag';
import { AppText } from '@/shared/ui/typography/app-text';

import { BTNS } from './const';

export const TokenInterestApp = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });

      slideFromBottom({ ref: itemRefs });
    },
    { scope: containerRef }
  );

  return (
    <Box>
      <AppText ref={titleRef} textStyle={'text_md_600'} marginBottom={'16px'}>
        {t(LOCAL_TEXT.INVESTOR_PAGE.UTILITY.INTEREST_TITLE)}
      </AppText>
      <Flex
        flexWrap={'wrap'}
        gap={'16px'}
        textAlign={'center'}
        justifyContent={'center'}
      >
        {BTNS.map((item, i) => {
          const { text, ...rest } = item;

          return (
            <AppTag
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              key={i}
              text={t(text)}
              {...rest}
              width={{ base: '70%', md: 'fit-content' }}
              justifyContent={{ base: 'center', md: 'flex-start' }}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
