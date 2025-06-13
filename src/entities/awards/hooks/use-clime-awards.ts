import { AxiosError } from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { claimAwardsReward } from '@/shared/api/awards/awards.api';
import { QUERY_KEYS } from '@/shared/consts';

export const useClimeAwardsTask = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: claimAwardsReward,
    onError: (error: AxiosError) => {
      throw error;
    },
    onSuccess: () => {
      return true;
    },

    onSettled: () => {
      client.resetQueries({ queryKey: [QUERY_KEYS.AWARDS] });
      client.invalidateQueries({ queryKey: [QUERY_KEYS.AWARDS] });
      client.resetQueries({ queryKey: [QUERY_KEYS.ME] });
      client.invalidateQueries({ queryKey: [QUERY_KEYS.ME] });
      client.refetchQueries({ queryKey: [QUERY_KEYS.ME] });
    },
  });
};
