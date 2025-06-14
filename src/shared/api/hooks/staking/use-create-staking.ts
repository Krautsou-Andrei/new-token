import { useMutation, useQueryClient } from '@tanstack/react-query';

import { showErrorMessage } from '@/shared/lib/utils/notify';

import { staking } from '../../staking/staking-api';

export const useCreateStaking = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: staking,
    onError: () => {
      showErrorMessage('Ошибка создания стейкинга');
    },
    onSuccess: () => {
      client.invalidateQueries();
    },
  });

  return {
    ...mutation,
  };
};
