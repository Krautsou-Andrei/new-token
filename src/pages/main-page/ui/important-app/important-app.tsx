import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex, type FlexProps } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardChange } from '@/shared/ui/app-card-change';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { IMPORTANT } from './const';

type ImportantAppProps = {} & FlexProps;

export const ImportantApp = ({ ...props }: ImportantAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      slideFromBottom({ ref: titleRef });

      slideFromLeftRight({ ref: itemRefs });
    },
    { scope: containerRef }
  );
  return (
    <Flex
      ref={containerRef}
      direction={'column'}
      gap={6}
      alignItems={'center'}
      {...props}
    >
      <AppHeading ref={titleRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.CREATOR_PAGE.IMPORTANT.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.IMPORTANT.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <Flex gap={3}>
        {IMPORTANT.map((item, i) => (
          <AppCardChange
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            p={5}
            key={item.id}
            descriptions={HighlightText({
              text: t(item.description),
              highlight: t(item.textHighLight),
            })}
            iconName={item.iconName}
            iconSize={{ width: 76, height: 76 }}
            textStyle={'text_sm_500'}
          />
        ))}
      </Flex>
    </Flex>
  );
};
