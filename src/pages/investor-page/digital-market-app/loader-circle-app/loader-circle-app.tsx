import gsap from 'gsap';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import {
  GSAP_ANIMATION_START_POSITION,
  slideFromBottom,
} from '@/shared/consts';

interface CircleAppProps {
  progress: number;
  width?: number;
  height?: number;
}

export const LoaderCircleApp = ({
  progress,
  width = 80,
  height = 80,
}: CircleAppProps) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  const containerRef = useRef(null);
  const progressCircleRef = useRef<SVGCircleElement | null>(null);
  useGSAP(
    () => {
      slideFromBottom({ ref: containerRef });
    },
    { scope: containerRef }
  );
  useGSAP(
    () => {
      if (progressCircleRef.current) {
        const offset = circumference * (1 - progress / 100);
        gsap.to(progressCircleRef.current, {
          strokeDashoffset: offset,
          delay: 0.5,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: GSAP_ANIMATION_START_POSITION,
          },
        });
      }
    },
    { scope: containerRef, dependencies: [progress] }
  );

  return (
    <svg
      ref={containerRef}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#262626"
        strokeWidth="20"
      />

      <circle
        ref={progressCircleRef}
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="#B7FB0F"
        strokeWidth="20"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        transform="rotate(-90 50 50)"
        style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
      />
    </svg>
  );
};

export default LoaderCircleApp;
