import { useMutation, useQueryClient } from '@tanstack/react-query';

import { showErrorMessage } from '@/shared/lib/utils/notify';

import { createVideo } from '../../video/video.api';

export const useCreateVideo = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: createVideo,
    onError: () => {
      showErrorMessage('Ошибка отправки видео');
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return {
    ...mutation,
  };
};
