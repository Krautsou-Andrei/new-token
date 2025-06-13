import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { type BoxProps, Flex } from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

type IdeaAppProps = {} & BoxProps;
export const IdeaApp = ({ ...props }: IdeaAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: headingRef });
      slideFromBottom({ ref: textRef });
    },
    { scope: containerRef }
  );

  return (
    <Flex ref={containerRef} direction="column" gap={4} {...props}>
      <AppHeading ref={headingRef}>
        {HighlightText({
          text: t(LOCAL_TEXT.CREATOR_PAGE.IDEA.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.CREATOR_PAGE.IDEA.TITLE.HIGHLIGHT),
        })}
      </AppHeading>

      <AppText ref={textRef}>
        {t(LOCAL_TEXT.CREATOR_PAGE.IDEA.DESCRIPTIONS)}
      </AppText>
    </Flex>
  );
};
