import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { type BoxProps, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppBig2XlText } from '@/shared/ui/typography/app-big-2xl-text';
import { AppBigText } from '@/shared/ui/typography/app-big-text';
import { AppText } from '@/shared/ui/typography/app-text';

type OurGoalsAppProps = {} & BoxProps;

export const OurGoalsApp = ({ ...props }: OurGoalsAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);

  const titleRef = useRef(null);
  const goalRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: goalRef });
      slideFromBottom({ ref: subtitleRef });
    },
    { scope: containerRef }
  );
  return (
    <Flex ref={containerRef} direction={'column'} gap={6} {...props}>
      <AppText ref={titleRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.CREATOR_PAGE.OUR_GOALS.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.OUR_GOALS.TITLE.HIGHLIGHT),
        })}
      </AppText>
      <Flex
        ref={goalRef}
        direction={'column'}
        alignItems={'center'}
        color={'text.secondary'}
      >
        <AppBigText
          textTransform={'uppercase'}
          fontFamily={'druk_wide_cyrbold'}
        >
          {t(LOCAL_TEXT.CREATOR_PAGE.OUR_GOALS.OUR_GOAL)}
        </AppBigText>
        <AppBig2XlText fontFamily={'druk_wide_cyrbold'}>
          {t(LOCAL_TEXT.CREATOR_PAGE.OUR_GOALS.GOAL)}
        </AppBig2XlText>
      </Flex>
      <AppText ref={subtitleRef}>
        {t(LOCAL_TEXT.CREATOR_PAGE.OUR_GOALS.GOAL_USERS)}
      </AppText>
    </Flex>
  );
};
