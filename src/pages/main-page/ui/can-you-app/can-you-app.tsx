import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { type BoxProps, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { DESCRIPTIONS } from './const';

type CanYouAppProps = {} & BoxProps;

export const CanYouApp = ({ ...props }: CanYouAppProps) => {
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
    <Flex ref={containerRef} direction={'column'} gap={6} {...props}>
      <AppHeading ref={titleRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.CREATOR_PAGE.CAN_YOU.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.CAN_YOU.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <Flex direction={'column'} gap={3}>
        {DESCRIPTIONS.map((item, i) => (
          <AppCardDescriptions
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            key={item.id}
            isBorder
            descriptions={t(item.descriptions)}
            iconName={item.iconName}
          />
        ))}
      </Flex>
    </Flex>
  );
};
