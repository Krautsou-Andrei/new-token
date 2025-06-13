import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { getAllUsersData } from '../../users/users.api';

export const useGetAllUsersData = (isFetch: boolean = true) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.ALL_USERS],
    queryFn: async ({ signal }) => {
      try {
        return await getAllUsersData({
          signal,
        });
      } catch (error) {
        console.error('error-useGetAllUsersData', error);
      }
    },
    enabled: isFetch,
    select: (data) => data?.data,
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
  });

  return { ...query };
};
