import { forwardRef, useEffect } from 'react';

import { Box, type BoxProps } from '@chakra-ui/react';

import { gsap } from '@/shared/lib/utils';

import { ArrowApp } from './arrow-app';
import { ICONS, ICONS_DELAY } from './const';
import { IconApp } from './icon-app';

type CircularIconsAppProps = {
  iconsRef: React.RefObject<(HTMLDivElement | null)[]>;
  arrowsRef: React.RefObject<(HTMLDivElement | null)[]>;
  step: number;
} & BoxProps;

export const CircularIconsApp = forwardRef<
  HTMLDivElement,
  CircularIconsAppProps
>(({ iconsRef, arrowsRef, step, ...props }, ref) => {
  useEffect(() => {
    iconsRef.current.forEach((item, i) => {
      if (item) {
        gsap.to(item, {
          opacity: i === step ? 1 : 0.3,
          delay: i !== step ? ICONS_DELAY : 0.3 + ICONS_DELAY,
          duration: 0.6,
          ease: 'power1.out',
        });
      }
    });

    arrowsRef.current.forEach((item, i) => {
      if (item) {
        gsap.to(item, {
          opacity: i === step ? 1 : 0.3,
          delay: i !== step ? 0.4 + ICONS_DELAY : 0.8 + ICONS_DELAY,
          duration: 0.6,
          ease: 'power1.out',
        });
      }
    });
  }, [arrowsRef, iconsRef, step]);

  return (
    <Box
      ref={ref}
      position={'relative'}
      height={'280px'}
      width={'280px'}
      margin={'0 auto'}
      {...props}
    >
      {ICONS.map((item, i) => (
        <IconApp
          ref={(el) => {
            iconsRef.current[i] = el;
          }}
          key={i}
          {...item}
          index={i}
        />
      ))}
      {new Array(4).fill(0).map((_, i) => (
        <ArrowApp
          ref={(el) => {
            arrowsRef.current[i] = el;
          }}
          index={i}
          key={i}
        />
      ))}
    </Box>
  );
});
