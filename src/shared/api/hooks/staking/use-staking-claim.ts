import { useMutation, useQueryClient } from '@tanstack/react-query';

import { showErrorMessage } from '@/shared/lib/utils/notify';

import { stakingClaim } from '../../staking/staking-api';

export const useStakingClaim = () => {
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: stakingClaim,
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
