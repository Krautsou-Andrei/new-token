import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { slideFromBottom } from '@/shared/consts';

export const useAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const inputTitleRef = useRef(null);
  const inputRef = useRef(null);
  const inputSubtitleRef = useRef(null);
  const getRef = useRef(null);
  const btnRef = useRef(null);
  const privacyRef = useRef(null);

  useGSAP(
    () => {
      slideFromBottom({ ref: containerRef });
      slideFromBottom({ ref: titleRef });
      slideFromBottom({ ref: subtitleRef });
      slideFromBottom({ ref: inputTitleRef });
      slideFromBottom({ ref: inputRef });
      slideFromBottom({ ref: inputSubtitleRef });
      slideFromBottom({ ref: getRef });
      slideFromBottom({ ref: btnRef });
      slideFromBottom({ ref: privacyRef });
    },
    { scope: containerRef }
  );

  return {
    containerRef,
    titleRef,
    subtitleRef,
    inputTitleRef,
    inputRef,
    inputSubtitleRef,
    getRef,
    btnRef,
    privacyRef,
  };
};
