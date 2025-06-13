import { AWARDS } from '@/pages/tasks-page/const';

import { useTranslation } from 'react-i18next';

import { useAwards } from '@/features/awards';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useAuthStore } from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

export const useHomePage = () => {
  const { t } = useTranslation();
  const { data: user } = useAuthMe();
  const { isAuthModalOpen, openAuthModal, closeAuthModal } = useAuthStore();
  const { openSuccessModal, setSucceessModal, closeSuccessModal } =
    useModalStore();

  const { mapAutoTasks, handleMarkTaskAsCompleted } = useAwards(Boolean(user));
  const checkin = mapAutoTasks?.get(AWARDS_TASKS.CHECKIN);

  const isClaimed = checkin?.isClaimed;

  const handleNotAuth = () => {
    if (!user) {
      openAuthModal();
    }
  };

  const handleBuyToken = () => {
    handleNotAuth();
  };

  const hadleSuccessModal = (task: string) => {
    const modal = {
      heading: t(AWARDS.find((item) => item.category === task)?.title || ''),
      buttonText: t(LOCAL_TEXT.BUTTON_CLOSE),
      descriptions: t(LOCAL_TEXT.MODAL_CHECKED.DESCRIPTIONS, {
        value: mapAutoTasks?.get(task)?.reward,
      }),
      buttonFunction: closeSuccessModal,
    };
    setSucceessModal(modal);
    openSuccessModal();
  };

  const handleGiveMeBohus = () => {
    handleNotAuth();

    if (user && !isClaimed) {
      handleMarkTaskAsCompleted(AWARDS_TASKS.CHECKIN, () =>
        hadleSuccessModal(AWARDS_TASKS.CHECKIN)
      );
    }
  };

  return {
    state: { checkin, isAuthModalOpen, isClaimed, mapAutoTasks, user },
    functions: {
      closeAuthModal,
      handleBuyToken,
      handleGiveMeBohus,
      openAuthModal,
    },
  };
};
