import { useStepsDrawer } from './hooks/useStepsDrawer';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';

import { AppIcon } from '@/shared/ui/app-icon';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';

import { Step0 } from './steps/step0/step0';
import { Step1 } from './steps/step1/step1';

export const StepsDrawerApp = () => {
  const {
    isStepsDrawerOpen,
    setIsStepsDrawerOpen,
    step,
    drawerBodyRef,
    setStep,
    nextStep,
    prevStep,
  } = useStepsDrawer();

  return (
    <Drawer
      autoFocus={false}
      isOpen={isStepsDrawerOpen}
      onClose={() => {
        setStep(0);
        setIsStepsDrawerOpen(false);
      }}
      placement="bottom"
      size={'full'}
    >
      <DrawerOverlay />
      <DrawerContent bgColor={'background.page'}>
        <AppLayoutBound
          position="sticky"
          top={0}
          zIndex={1}
          pt={4}
          bgColor={'background.page'}
          pb="6px"
          px="35px"
          width={'full'}
        >
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'full'}
          >
            <AppIcon name={'icon/back'} onClick={prevStep} />
            <AppIcon
              name={'icon/close'}
              cursor={'pointer'}
              onClick={() => {
                setStep(0);
                setIsStepsDrawerOpen(false);
              }}
            />
          </Flex>
        </AppLayoutBound>
        <DrawerBody ref={drawerBodyRef} overflow={'auto'} pt="100px" px="20px">
          {step === 0 && <Step0 nextStep={nextStep} />}
          {step === 1 && <Step1 nextStep={nextStep} />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
