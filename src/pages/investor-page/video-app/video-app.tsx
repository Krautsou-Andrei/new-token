import { type RefObject, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AspectRatio,
  Box,
  type BoxProps,
  Flex,
  Image,
  VStack,
} from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';
import { useNavigate } from '@tanstack/react-router';

import { BackButtonApp } from '@/widgets/back-button-app';
import { ButtonBuyTokenApp } from '@/widgets/buttons/button-buy-token-app';
import { LanguageSwitchApp } from '@/widgets/language-switch-app';

import {
  ROUTES,
  slideFromBottom,
  slideFromRight,
  slideFromTop,
} from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { HighlightText } from '@/shared/lib/utils';
import { AppIcon } from '@/shared/ui/app-icon';
import AppMuxPlayer from '@/shared/ui/app-mux-player/app-mux-player';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

type VideoAppProps = { tokenRef: RefObject<HTMLDivElement | null> } & BoxProps;

export const VideoApp = ({ tokenRef, ...props }: VideoAppProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const languageRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const buttonRef4 = useRef(null);
  const [isVideoStart, setIsVideoStart] = useState(false);

  useGSAP(
    () => {
      const start = 'top bottom';

      slideFromTop({ ref: languageRef, start });
      slideFromTop({ ref: logoRef, start });
      slideFromRight({ ref: videoRef, start });
      slideFromRight({ ref: textRef, start });
      slideFromBottom({ ref: buttonRef1, start });
      slideFromBottom({ ref: buttonRef2, start });
      slideFromBottom({ ref: buttonRef3, start });
      slideFromBottom({ ref: buttonRef4, start });
    },
    { scope: containerRef }
  );
  return (
    <Flex ref={containerRef} direction={'column'} gap={{ base: 5 }} {...props}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex alignItems={'center'} gap={3}>
          <BackButtonApp />
          <LanguageSwitchApp />
        </Flex>

        <Box
          width={'128px'}
          height={'64px'}
          onClick={() => navigate({ to: ROUTES.MAIN })}
        >
          <Image src="logo.svg" />
        </Box>
      </Flex>

      <AppHeading fontSize={{ base: '32px', md: '36px' }} textAlign={'left'}>
        {HighlightText({
          text: t(LOCAL_TEXT.INVESTOR_PAGE.VIDEO.TITLE.VALUE),
          highlight: t(LOCAL_TEXT.INVESTOR_PAGE.VIDEO.TITLE.HIGHLIGHT),
        })}
      </AppHeading>
      <Flex direction={'column'} align={'center'} gap={{ base: 5 }}>
        {isVideoStart && (
          <AppMuxPlayer
            playbackId="K00qBI6Y1TcXGiqNmLmKJURbTV02MmqjbU4Depjn5B9gs"
            videoId="main"
            onClose={() => setIsVideoStart(false)}
          />
        )}
        <AspectRatio
          ref={videoRef}
          width="100%"
          maxWidth="100%"
          maxHeight="390px"
          ratio={{ base: 1200 / 780 }}
        >
          <>
            <Image src="images/investor.webp" alt="" borderRadius="xl" />
            <Box
              onClick={() => setIsVideoStart(true)}
              position={'relative'}
              height="full"
              width="full"
              padding="0"
              display="flex"
              border={{ base: 'none' }}
            >
              <AppIcon
                className="rotate"
                name="icon/minutes10"
                width="126px"
                height="126px"
              />
              <Flex
                borderRadius={'full'}
                w={16.5}
                h={16.5}
                pl={2}
                alignItems={'center'}
                justifyContent={'center'}
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                bgColor={'background.secondary'}
              >
                <AppIcon name="icon/play" width={40} height={40} />
              </Flex>
            </Box>
          </>
        </AspectRatio>
        <AppText ref={textRef}>
          {t(LOCAL_TEXT.INVESTOR_PAGE.VIDEO.DESCRIPTIONS)}
        </AppText>

        <VStack gap="4" width="100%">
          <ButtonBuyTokenApp
            ref={buttonRef1}
            onClick={() => {
              if (tokenRef.current) {
                const top =
                  tokenRef.current.getBoundingClientRect().top +
                  window.scrollY -
                  80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
          />
        </VStack>
      </Flex>
    </Flex>
  );
};
