import { useMutation, useQueryClient } from '@tanstack/react-query';

import { showErrorMessage } from '@/shared/lib/utils/notify';

import { rewardVideo } from '../../video/video.api';

export const useRewardVideo = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: rewardVideo,
    onError: () => {
      showErrorMessage('Ошибка получения награды');
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return {
    ...mutation,
  };
};
