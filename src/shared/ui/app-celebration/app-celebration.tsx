import confetti from 'canvas-confetti';
import { useEffect } from 'react';

import { useModalStore } from '@/shared/lib/persistance/modal.store';

export const AppCelebration = () => {
  const { isSuccessModal, isConfety, setIsConfety } = useModalStore();

  useEffect(() => {
    if (isConfety || isSuccessModal) {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      canvas.id = 'confetti-canvas';

      document.body.appendChild(canvas);

      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true,
      });

      const count = 7;
      for (let i = 0; i < count; i++) {
        myConfetti({
          particleCount: 40,
          spread: 120,
          startVelocity: 55,
          scalar: 1.5,
          ticks: 250,
          origin: {
            x: i / (count - 1),
            y: 0.5,
          },
        });
      }

      const timeout = setTimeout(() => {
        canvas.remove();
        setIsConfety(false);
      }, 7000);

      return () => {
        clearTimeout(timeout);
        canvas.remove();
        setIsConfety(false);
      };
    }
  }, [isConfety, isSuccessModal, setIsConfety]);

  return null;
};
