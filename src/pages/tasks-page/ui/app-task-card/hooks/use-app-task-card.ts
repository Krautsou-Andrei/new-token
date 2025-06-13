import { useState } from 'react';

import type { Task } from '@/entities/awards';

import { useSolanaAuth } from '@/features/auth';
import { useAwards } from '@/features/awards';

import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

export const useApptaskCard = () => {
  const [isClick, setIsClick] = useState(false);
  const { functions: functionsSolana } = useSolanaAuth();

  const [isSucccess, setIsSuccess] = useState(false);

  const { openModalByBit, setIsConfety } = useModalStore();

  const { mapAutoTasks, isLoading, handleMarkTaskAsCompleted } = useAwards();

  const handleStartTask = (task: Task) => {
    setIsClick(true);

    if (task.webUrl) {
      window.open(task.webUrl, '_blank');
    }

    if (task.category === AWARDS_TASKS.WALLET) {
      functionsSolana.handleSolanaAuth();
    }

    if (task.category === AWARDS_TASKS.BYBIT) {
      openModalByBit();
    }
  };

  const handleGetAward = async (task: Task) => {
    try {
      await handleMarkTaskAsCompleted(task.category);
      setIsConfety(true);
      setIsSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      /* empty */
    }
  };

  return {
    state: { isClick, isSucccess, isLoading, mapAutoTasks },
    functions: { handleGetAward, handleStartTask },
  };
};
