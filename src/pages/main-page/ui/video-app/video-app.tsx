// import creatorImage from '';
import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  AspectRatio,
  Box,
  type BoxProps,
  Button,
  Flex,
  Image,
  VStack,
} from '@chakra-ui/react';
import { useGSAP } from '@gsap/react';

import { ButtonAirdropApp, ButtonInvestorApp } from '@/widgets/buttons';
import { LanguageSwitchApp } from '@/widgets/language-switch-app';

import { slideFromBottom, slideFromRight, slideFromTop } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppIcon } from '@/shared/ui/app-icon';
import AppMuxPlayer from '@/shared/ui/app-mux-player/app-mux-player';
import { AppText } from '@/shared/ui/typography/app-text';

type VideoAppProps = {
  refInvest: RefObject<HTMLDivElement | null>;
  setIsViewAll: Dispatch<SetStateAction<boolean>>;
} & BoxProps;

export const VideoApp = ({
  refInvest,
  setIsViewAll,
  ...props
}: VideoAppProps) => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const languageRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
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
    },
    { scope: containerRef }
  );

  return (
    <Flex ref={containerRef} direction={'column'} gap={{ base: 5 }} {...props}>
      <Flex ref={logoRef} justify="center">
        <Image src="logo.svg" alt="" />
      </Flex>
      <Box ref={languageRef} position={'absolute'} top={4} left={4}>
        <LanguageSwitchApp />
      </Box>
      <Flex direction={'column'} align={'center'} gap={{ base: 5 }}>
        {isVideoStart && (
          <Box
            position={'relative'}
            height="full"
            width="full"
            padding="0"
            borderRadius="xl"
            overflow="hidden"
          >
            <AppMuxPlayer
              playbackId="UxZ00vTBl028rG02kSz7f02bqqix72gBUAMZziFvg3Cio00s"
              videoId="main"
              onClose={() => setIsVideoStart(false)}
            />
          </Box>
        )}
        <AspectRatio
          ref={videoRef}
          width="100%"
          maxWidth={'100%'}
          maxHeight="390px"
          ratio={{ base: 1200 / 780 }}
        >
          <>
            <Image src="images/creator.webp" alt="" borderRadius="xl" />
            <Box
              onClick={() => setIsVideoStart(true)}
              cursor={'pointer'}
              position={'relative'}
              height="full"
              width="full"
              padding="0"
              display="flex"
              border={{ base: 'none' }}
            >
              <AppIcon
                className="rotate"
                name="icon/minutes3"
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
          {t(LOCAL_TEXT.CREATOR_PAGE.VIDEO.DESCRIPTIONS)}
        </AppText>
        <VStack gap="4" width="100%">
          <ButtonAirdropApp ref={buttonRef1} />
          <ButtonInvestorApp ref={buttonRef2} />
          <Button
            ref={buttonRef3}
            variant={'fit'}
            size={'fit'}
            onClick={() => {
              setIsViewAll(true);
              setTimeout(() => {
                if (refInvest.current) {
                  const top =
                    refInvest.current.getBoundingClientRect().top +
                    window.scrollY -
                    40;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }, 0);
            }}
          >
            <AppIcon name="arrows/down" />
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
