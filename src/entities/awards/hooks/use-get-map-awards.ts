import { useQuery } from '@tanstack/react-query';

import { getAllAwards } from '@/shared/api/awards/awards.api';
import { QUERY_KEYS } from '@/shared/consts';

import type { AwardsType } from '../model';

export const useGetMapAwards = (isFetch: boolean = true) => {
  return useQuery({
    queryFn: async ({ signal }) => {
      const response = await getAllAwards({ signal });
      return response;
    },
    queryKey: [QUERY_KEYS.AWARDS],
    enabled: isFetch,
    select: (data) => {
      const createNewMap = new Map(
        data.data.map((task: AwardsType) => [
          task.name,
          {
            reward: task.reward,
            isClaimed: task.isClaimed,
            isPending: task.pending,
          },
        ])
      );
      return createNewMap;
    },
  });
};
