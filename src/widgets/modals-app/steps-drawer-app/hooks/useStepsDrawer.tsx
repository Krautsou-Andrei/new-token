import { useRef, useState } from 'react';

import { useModalsStore } from '@/shared/lib/modals/modals.store';

export const useStepsDrawer = () => {
  const { isStepsDrawerOpen, setIsStepsDrawerOpen } = useModalsStore();
  const [step, setStep] = useState(0);
  const drawerBodyRef = useRef<HTMLDivElement>(null);

  const nextStep = () => {
    if (step === 1) {
      setIsStepsDrawerOpen(false);
      setStep(0);
    } else {
      drawerBodyRef.current?.scrollTo(0, 0);
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step === 0) {
      setIsStepsDrawerOpen(false);
    } else {
      setStep(step - 1);
    }
  };
  return {
    isStepsDrawerOpen,
    setIsStepsDrawerOpen,
    step,
    setStep,
    drawerBodyRef,
    nextStep,
    prevStep,
  };
};
