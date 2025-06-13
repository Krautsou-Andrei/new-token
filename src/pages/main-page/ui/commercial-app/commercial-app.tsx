import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, type BoxProps, Flex, Text } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { H2eCircleApp } from '@/widgets/h2e-circle-app/h2e-circle-app';

import { DEFAULT, slideFromBottom, slideFromLeft } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText, splitString } from '@/shared/lib/utils';
import { AppTag } from '@/shared/ui/app-tag';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

import { DESCRIPTIONS, TAGS } from './const';

type CommercialAppProps = {} & BoxProps;

export const CommercialApp = ({ ...props }: CommercialAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const h2eRef = useRef(null);
  const bgRef2 = useRef(null);
  const secondTitleRef = useRef(null);
  const secondSubtitleRef = useRef(null);
  const btnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const descRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: bgRef });
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: subtitleRef });
      slideFromBottom({ ref: btnRef });
      slideFromLeft({ ref: stepsRef });
      slideFromBottom({ ref: h2eRef, start: 'top center+=100' });
      slideFromBottom({ ref: bgRef2 });
      slideFromBottom({ ref: secondTitleRef });
      slideFromBottom({ ref: secondSubtitleRef });
      slideFromLeft({ ref: btnsRef });
      slideFromBottom({ ref: descRef });
    },
    { scope: containerRef }
  );

  return (
    <Flex ref={containerRef} direction={'column'} gap={6} {...props}>
      <AppHeading ref={titleRef}>
        {splitString(t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.TITLE))}
      </AppHeading>
      <Flex
        ref={bgRef}
        direction={'column'}
        gap={4}
        p={5}
        bgColor={'background.third'}
        borderRadius="xl"
        mb={6}
      >
        <Flex
          ref={subtitleRef}
          textStyle={'text_md_600'}
          alignItems={'center'}
          gap={1}
          textTransform={'uppercase'}
        >
          {HighlightText({
            text: t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.DESCRIPTIONS.VALUE),
            highlight: t(
              LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.DESCRIPTIONS.HIGHLIGHT
            ),
          })}
        </Flex>
        <AppTag
          ref={btnRef}
          iconName={'icon/bitcoin'}
          text={t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.TABS.ONE)}
        />
        {DESCRIPTIONS.map((item, i) => (
          <Flex
            ref={(el) => {
              stepsRef.current[i] = el;
            }}
            textStyle={'text_sm_500'}
            key={item.id}
            alignItems={'center'}
            gap={1}
            fontSize={{ base: '14px', sm: '18px' }}
          >
            <Box
              bgColor={'text.white'}
              w={1}
              height={1}
              rounded={'full'}
              mr={2}
            />
            <Text>{t(item.text)}</Text>
            <Text color={'text.secondary'}>{t(item.highlightText)}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex
        direction={'column'}
        gap={6}
        alignItems={'center'}
        marginBottom={'24px'}
      >
        <H2eCircleApp ref={h2eRef} />
        <AppText ref={secondTitleRef}>
          <>
            {HighlightText({
              text: t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.SUB_TITLE.ONE.VALUE, {
                value: DEFAULT.TOKEN_PRE_SALE,
              }),
              highlight: t(
                LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.SUB_TITLE.ONE.HIGHLIGHT,
                {
                  value: DEFAULT.TOKEN_PRE_SALE,
                }
              ),
            })}
            {HighlightText({
              text: t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.SUB_TITLE.TWO.VALUE),
              highlight: t(
                LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.SUB_TITLE.TWO.HIGHLIGHT
              ),
            })}
          </>
        </AppText>
      </Flex>

      <Flex
        ref={bgRef}
        direction={'column'}
        gap={4}
        p={5}
        bgColor={'background.third'}
        borderRadius="xl"
      >
        <Flex
          ref={secondSubtitleRef}
          textStyle={'text_md_600'}
          alignItems={'center'}
          gap={1}
          textTransform={'uppercase'}
        >
          {HighlightText({
            text: t(
              LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.DESCRIPTIONS_SECOND.VALUE
            ),
            highlight: t(
              LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.DESCRIPTIONS_SECOND.HIGHLIGHT
            ),
          })}
        </Flex>

        <Flex
          textStyle={'text_sm_500'}
          alignItems={'center'}
          gap={4}
          wrap={'wrap'}
        >
          {TAGS.map((item, i) => (
            <AppTag
              ref={(el) => {
                btnsRef.current[i] = el;
              }}
              key={item.id}
              iconName={item.iconName}
              text={t(item.text)}
            />
          ))}
        </Flex>
        <Text ref={descRef} textStyle={'text_sm_500'}>
          {HighlightText({
            text: t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.ALL.VALUE),
            highlight: t(LOCAL_TEXT.CREATOR_PAGE.COMMERCIAL.ALL.HIGHLIGHT),
          })}
        </Text>
      </Flex>
    </Flex>
  );
};
