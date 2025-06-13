import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAwards } from '@/features/awards';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { usePutUserInfo } from '@/shared/api/hooks/user-info/use-put-user-info-data';
import { DEFAULT } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

export const useSpecialModal = () => {
  const { t } = useTranslation();

  const {
    isOpenModalByBIt,
    closeModalByBit,
    openSuccessModal,
    setSucceessModal,
    closeSuccessModal,
  } = useModalStore();

  const { data: userData } = useAuthMe();
  const { mutate: putUserInfo } = usePutUserInfo();
  const { mapAutoTasks, handleMarkTaskAsCompleted } = useAwards();
  const [uuidValue, setUuidValue] = useState('');
  const [step, setStep] = useState(0);
  const [isVideoStart, setIsVideoStart] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  const onSubmit = () => {
    if (uuidValue !== '') {
      if (!userData) {
        return;
      }
      putUserInfo({
        params: {
          userId: userData.id,
          bybitWalletAddress: uuidValue,
        },
      });
      handleMarkTaskAsCompleted(AWARDS_TASKS.BYBIT, () => {
        hadleSuccessModal(AWARDS_TASKS.BYBIT);
        closeModalByBit();
        setStep(0);
      });
    }
  };

  const hadleSuccessModal = (task: string) => {
    const modal = {
      heading: t(LOCAL_TEXT.MODAL_SUCCESS.TITLE, {
        value: DEFAULT.TOKEN,
        valueAwards: mapAutoTasks?.get(task)?.reward,
      }),
      backText: t(LOCAL_TEXT.BUTTON_CLOSE),
      buttonText: t(LOCAL_TEXT.BUTTON_CREATE_VIDEO),
      descriptions: t(LOCAL_TEXT.MODAL_SUCCESS.DESCRIPTIONS),
      buttonFunction: closeSuccessModal,
    };
    setSucceessModal(modal);
    openSuccessModal();
  };

  const onByBitClick = () => {
    window.open(DEFAULT.BYBIT, '_blank');
    setIsAccount(false);
    setStep(1);
  };

  const onAccountByBit = () => {
    setIsAccount(true);
    setStep(1);
  };

  const onClose = () => {
    closeModalByBit();
    setStep(0);
  };

  return {
    state: {
      isAccount,
      isOpenModalByBIt,
      isVideoStart,
      step,
      userData,
      uuidValue,
    },
    functions: {
      onAccountByBit,
      onByBitClick,
      onClose,
      onSubmit,
      setUuidValue,
      setIsVideoStart,
    },
  };
};
