import type { RefObject } from 'react';

import { gsap } from '../lib/utils';

export const GSAP_ANIMATION_START_POSITION = 'top 95%';
export const GSAP_DEFAULT_DELAY = 0.1;
export const SLIDE_OFFSET = 50;

type SingleOrArrayRef =
  | RefObject<HTMLElement | null>
  | RefObject<(HTMLElement | null)[]>;

interface IAnimation {
  ref: SingleOrArrayRef;
  delay?: number;
  start?: string;
}

const animateSingle = (
  el: HTMLElement,
  animation: gsap.TweenVars,
  start: string
) => {
  gsap.set(el, animation.from);
  gsap.to(el, {
    ...animation.to,
    scrollTrigger: {
      trigger: el,
      start,
    },
  });
};

const runAnimation = (
  ref: SingleOrArrayRef,
  animation: { from: gsap.TweenVars; to: gsap.TweenVars },
  delay: number,
  start: string
) => {
  const apply = (el: HTMLElement | null, i: number) => {
    if (!el) return;
    animateSingle(
      el,
      {
        from: animation.from,
        to: { ...animation.to, delay: delay + i * 0.1 },
      },
      start
    );
  };

  if (Array.isArray(ref.current)) {
    ref.current.forEach(apply);
  } else if (ref.current instanceof HTMLElement) {
    apply(ref.current, 0);
  }
};

export const slideFromRight = ({
  ref,
  delay = GSAP_DEFAULT_DELAY,
  start = GSAP_ANIMATION_START_POSITION,
}: IAnimation) => {
  runAnimation(
    ref,
    {
      from: { autoAlpha: 0, x: SLIDE_OFFSET },
      to: { autoAlpha: 1, x: 0, duration: 0.3 },
    },
    delay,
    start
  );
};

export const slideFromLeft = ({
  ref,
  delay = GSAP_DEFAULT_DELAY,
  start = GSAP_ANIMATION_START_POSITION,
}: IAnimation) => {
  runAnimation(
    ref,
    {
      from: { autoAlpha: 0, x: -SLIDE_OFFSET },
      to: { autoAlpha: 1, x: 0, duration: 0.3 },
    },
    delay,
    start
  );
};

export const slideFromBottom = ({
  ref,
  delay = GSAP_DEFAULT_DELAY,
  start = GSAP_ANIMATION_START_POSITION,
}: IAnimation) => {
  runAnimation(
    ref,
    {
      from: { autoAlpha: 0, y: SLIDE_OFFSET },
      to: { autoAlpha: 1, y: 0, duration: 0.3 },
    },
    delay,
    start
  );
};

export const slideFromTop = ({
  ref,
  delay = GSAP_DEFAULT_DELAY,
  start = GSAP_ANIMATION_START_POSITION,
}: IAnimation) => {
  runAnimation(
    ref,
    {
      from: { autoAlpha: 0, y: -SLIDE_OFFSET },
      to: { autoAlpha: 1, y: 0, duration: 0.3 },
    },
    delay,
    start
  );
};

export const fadeIn = ({
  ref,
  delay = GSAP_DEFAULT_DELAY,
  start = GSAP_ANIMATION_START_POSITION,
}: IAnimation) => {
  runAnimation(
    ref,
    {
      from: { autoAlpha: 0 },
      to: { autoAlpha: 1, duration: 0.3 },
    },
    delay,
    start
  );
};

export const slideFromLeftRight = ({
  ref,
  delay = GSAP_DEFAULT_DELAY,
  start = GSAP_ANIMATION_START_POSITION,
}: IAnimation) => {
  const apply = (el: HTMLElement | null, i: number) => {
    if (!el) return;

    gsap.from(el, {
      x: i % 2 === 0 ? -SLIDE_OFFSET : SLIDE_OFFSET,
      autoAlpha: 0,
      duration: 0.3,
      delay: delay + i * 0.1,
      scrollTrigger: {
        trigger: el,
        start,
      },
    });
  };

  if (Array.isArray(ref.current)) {
    ref.current.forEach(apply);
  } else if (ref.current instanceof HTMLElement) {
    apply(ref.current, 0);
  }
};
