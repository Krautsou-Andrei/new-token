import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { type BoxProps, Flex, Grid } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { DEFAULT, slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { splitString } from '@/shared/lib/utils/slpit-string';
import { AppCardChange } from '@/shared/ui/app-card-change';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';
import { AppText } from '@/shared/ui/typography/app-text';

import { CHANGE_TOKEN } from './const';

type ChangeAwardsAppProps = {} & BoxProps;

export const ChangeAwardsApp = ({ ...props }: ChangeAwardsAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const secondTitle = useRef(null);
  const secondDescRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: subtitleRef });
      slideFromBottom({ ref: descRef });
      slideFromBottom({ ref: secondTitle });
      slideFromBottom({ ref: secondDescRef });
      slideFromLeftRight({ ref: itemsRef });
    },
    { scope: containerRef }
  );
  return (
    <Flex ref={containerRef} direction={'column'} gap={12} {...props}>
      <AppHeading ref={titleRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <Flex direction={'column'} gap={3} alignItems={'center'}>
        <Flex ref={subtitleRef} direction={'column'} alignItems={'center'}>
          <AppText>
            {HighlightText({
              text: t(
                LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.SUB_TITLE.ONE.VALUE
              ),
              highlight: t(
                LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.SUB_TITLE.ONE.HIGHLIGHT
              ),
            })}
          </AppText>
          <AppText>
            {HighlightText({
              text: t(
                LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.SUB_TITLE.TWO.VALUE,
                { value: DEFAULT.TOKEN }
              ),
              highlight: t(
                LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.SUB_TITLE.TWO.HIGHLIGHT
              ),
            })}
          </AppText>
        </Flex>
        <AppText
          ref={descRef}
          textStyle={'text_sm_500'}
          color={'text.descriptions'}
        >
          {t(LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.DESCRIPTIONS, {
            value: DEFAULT.TOKEN,
          })}
        </AppText>
      </Flex>
      <Flex direction={'column'} gap={4}>
        <AppText ref={secondTitle}>
          {HighlightText({
            text: t(
              LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.SUB_TITLE_SECOND.VALUE
            ),
            highlight: t(
              LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.SUB_TITLE_SECOND.HIGHLIGHT
            ),
          })}
        </AppText>
        <AppSmallText
          ref={secondDescRef}
          color={'text.descriptions'}
          textAlign={'center'}
        >
          {t(LOCAL_TEXT.CREATOR_PAGE.CHANGE_AWARDS.DESCRIPTIONS_SECOND, {
            value: DEFAULT.TOKEN_PRE_SALE,
          })}
        </AppSmallText>

        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          {CHANGE_TOKEN.map((item, i) => (
            <AppCardChange
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              key={item.id}
              iconName={item.iconName}
              descriptions={splitString(
                t(item.description, { value: item.value })
              )}
            />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
