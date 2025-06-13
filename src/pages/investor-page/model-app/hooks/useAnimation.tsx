import semanticTokens from '@/app/providers/with-chakra/theme/foundations/semanticTokens';

import { useEffect, useRef, useState } from 'react';

import { gsap } from '@/shared/lib/utils';

const TEXT_DELAY = 0.4;
const BG_DELAY = 0.1;
export const useCircularAnimation = () => {
  const [step, setStep] = useState(0);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const arrowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const ICONS_COUNT = 4;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % ICONS_COUNT);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.to(card, {
        backgroundColor:
          i !== step
            ? semanticTokens.colors.background.third
            : semanticTokens.colors.background.secondary,
        duration: BG_DELAY,
      });
      gsap.to(card.querySelector('.title'), {
        color:
          i !== step
            ? semanticTokens.colors.text.white
            : semanticTokens.colors.text.black,
        duration: TEXT_DELAY,
      });
      gsap.to(card, {
        color:
          i !== step
            ? semanticTokens.colors.text.descriptions
            : semanticTokens.colors.text.black,
        duration: TEXT_DELAY,
      });
    });
  }, [step]);

  return {
    step,
    iconsRef,
    arrowsRef,
    cardsRef,
  };
};
