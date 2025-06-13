import semanticTokens from '@/app/providers/with-chakra/theme/foundations/semanticTokens';

import { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '@/shared/lib/utils';

const TIME_OFFSET = 0.35;
const ONE_STEP_TIME = 0.9;
const START_ANIMATION_DELAY = 0.2;
const SCROLL_TRIGGER_OFFSET = 100;

export const useStepsAppScrollAnimation = ({
  cardsLength,
}: {
  cardsLength: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const cardDescriptionRefs = useRef<HTMLDivElement[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Общие настройки scrollTrigger
    const scrollTriggerConfig = {
      trigger: containerRef.current,
      start: `top bottom-=${SCROLL_TRIGGER_OFFSET}`,
      toggleActions: 'play none none none',
    };

    // Инициализация начального состояния
    gsap.set(progressRef.current, { scaleY: 0 });

    iconRefs.current.forEach((icon) => {
      if (!icon) return;
      gsap.set(icon, {
        backgroundColor: semanticTokens.colors.background.third,
      });
    });

    cardDescriptionRefs.current.forEach((cardDescription) => {
      gsap.set(cardDescription, {
        backgroundColor: semanticTokens.colors.background.secondary,
        color: semanticTokens.colors.text.black,
      });
    });

    // Инициализация карточек - все скрыты
    gsap.set(cardRefs.current, {
      y: -50,
      opacity: 0,
    });

    // Анимация прогресс-бара
    const progressAnimation = gsap.to(progressRef.current, {
      scaleY: 1,
      duration: (cardsLength - 1) * ONE_STEP_TIME,
      delay: START_ANIMATION_DELAY,
      ease: 'none',
      scrollTrigger: scrollTriggerConfig,
    });

    // Последовательная анимация для каждого шага
    iconRefs.current.forEach((icon, i) => {
      if (!icon) return;
      const localDelay = i * ONE_STEP_TIME - TIME_OFFSET;
      const delay =
        localDelay >= 0
          ? localDelay + START_ANIMATION_DELAY
          : START_ANIMATION_DELAY;

      gsap.to(icon, {
        backgroundColor: semanticTokens.colors.background.secondary,
        delay: delay,
        duration: 0.3,
        scale: 1.4,
        scrollTrigger: scrollTriggerConfig,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
          setCurrentStep(i + 1);

          // Анимация описания карточки
          requestAnimationFrame(() => {
            const cardDescription = cardDescriptionRefs.current[i];
            const TEXT_DELAY = 0.5;
            const BG_DELAY = 0.3;
            if (cardDescription) {
              gsap.to(cardDescription, {
                backgroundColor: semanticTokens.colors.background.third,
                duration: BG_DELAY,
                scrollTrigger: scrollTriggerConfig,
              });
              gsap.to(cardDescription.querySelector('.title'), {
                color: semanticTokens.colors.text.white,
                duration: TEXT_DELAY,
                scrollTrigger: scrollTriggerConfig,
              });
              gsap.to(cardDescription, {
                color: semanticTokens.colors.text.descriptions,
                duration: TEXT_DELAY,
                scrollTrigger: scrollTriggerConfig,
              });

              gsap.fromTo(
                cardDescription.querySelector('span'),
                {
                  color: semanticTokens.colors.text.black,
                },
                {
                  color: semanticTokens.colors.text.secondary,
                  duration: TEXT_DELAY,
                  scrollTrigger: scrollTriggerConfig,
                }
              );
            }
          });
        },
      });
    });

    // Анимация карточек
    if (cardRefs.current[0]) {
      gsap.to(cardRefs.current[0], {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: START_ANIMATION_DELAY,
        scrollTrigger: scrollTriggerConfig,
        ease: 'power2.out',
      });
    }

    if (cardRefs.current.length > 1) {
      gsap.to(cardRefs.current.slice(1), {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: START_ANIMATION_DELAY + ONE_STEP_TIME - TIME_OFFSET,
        stagger: {
          each: ONE_STEP_TIME,
          from: 'start',
        },
        scrollTrigger: scrollTriggerConfig,
        ease: 'power2.out',
      });
    }

    // Очистка анимаций при размонтировании
    return () => {
      progressAnimation.kill();
    };
  }, []);

  return {
    containerRef,
    progressRef,
    iconRefs,
    cardsContainerRef,
    cardRefs,
    cardDescriptionRefs,
    currentStep,
  };
};
