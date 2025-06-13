import { useEffect } from 'react';

import { Button, Text } from '@chakra-ui/react';

import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { splitString } from '@/shared/lib/utils';
import { AppCircleModal } from '@/shared/ui/app-circle-modal';

export const SuccessModalApp = () => {
  const { setIsConfety, modal, isSuccessModal, closeSuccessModal } =
    useModalStore();

  useEffect(() => {
    if (isSuccessModal) {
      setIsConfety(true);
    }
  }, [isSuccessModal, setIsConfety]);

  return (
    <AppCircleModal
      descriptions={splitString(modal?.descriptions || '')}
      heading={splitString(modal?.heading || '')}
      isOpen={isSuccessModal}
      onClose={closeSuccessModal}
    >
      <Button
        w={'fit-content'}
        px={8}
        variant={'secondary'}
        size={'sm'}
        onClick={modal?.buttonFunction}
      >
        {modal?.buttonText}
      </Button>

      <Button
        variant={'fit'}
        size={'fit'}
        onClick={modal?.backFunction ? modal?.backFunction : closeSuccessModal}
      >
        <Text textStyle={'text_xs_500'} textTransform={'lowercase'}>
          {modal?.backText}
        </Text>
      </Button>
    </AppCircleModal>
  );
};
