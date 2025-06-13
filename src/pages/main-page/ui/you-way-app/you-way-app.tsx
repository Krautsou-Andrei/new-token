import { type HTMLAttributes, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Flex, type FlexProps } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardWay } from '@/shared/ui/app-card-way';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { WAY } from './const';

type YouWayAppProps = FlexProps & HTMLAttributes<HTMLDivElement>;

export const YouWayApp = ({ ...props }: YouWayAppProps) => {
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
    <Flex ref={containerRef} direction={'column'} gap={6} {...props}>
      <AppHeading ref={titleRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.CREATOR_PAGE.YOU_WAY.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.YOU_WAY.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <Flex direction={'column'} gap={6}>
        {WAY.map((item, i) => (
          <AppCardWay
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            key={item.id}
            descriptions={t(item.description, { value: item.value })}
          >
            {item.button}
          </AppCardWay>
        ))}
      </Flex>
    </Flex>
  );
};
