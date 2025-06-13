import { useCallback, useRef } from 'react';

import { useClimeAwardsTask, useGetMapAwards } from '@/entities/awards';

export const useAwards = (isFetch?: boolean) => {
  const { data: mapAutoTasks, isLoading } = useGetMapAwards(isFetch);
  const { mutateAsync: onClimeAutoTask, isPending: isPendingClime } =
    useClimeAwardsTask();

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleMarkTaskAsCompleted = useCallback(
    async (category: string, onSuccess?: () => void) => {
      try {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        const params = { taskName: category };

        const res = await onClimeAutoTask({
          params,
          config: { signal: abortController.signal },
        });

        if (res) {
          if (onSuccess) {
            onSuccess();
          }
        }
      } catch (error) {
        console.error('error-useAvards', error);
      }
    },
    [onClimeAutoTask]
  );

  return {
    mapAutoTasks,
    isLoading: isLoading,
    isPendingClime,
    handleMarkTaskAsCompleted,
  };
};
