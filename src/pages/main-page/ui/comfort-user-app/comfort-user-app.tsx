import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { type BoxProps, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom, slideFromLeftRight } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppHeading } from '@/shared/ui/typography/app-heading';

import { COMFORT_USER } from './const';

type ComfortUserAppProps = {} & BoxProps;

export const ComfortUserApp = ({ ...props }: ComfortUserAppProps) => {
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
          text: t(LOCAL_TEXT.CREATOR_PAGE.COMFORT_USER.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.COMFORT_USER.TITLE.HIGHLIGHT),
        })}
      </AppHeading>

      <Flex direction="column" gap={3}>
        {COMFORT_USER.map((item, index) => (
          <AppCardDescriptions
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            descriptions={t(item.description)}
            iconName={item.iconName}
            iconSize={{ width: 68, height: 68 }}
          />
        ))}
      </Flex>
    </Flex>
  );
};
