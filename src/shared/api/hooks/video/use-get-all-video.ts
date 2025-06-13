import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { allVideo } from '../../video/video.api';

export const useGetAllVideo = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.ALL_VIDEO],
    queryFn: async ({ signal }) => {
      try {
        return await allVideo({
          config: { signal: signal },
        });
      } catch (error) {
        console.error('error-useGetRefData', error);
      }
    },

    select: (data) => data?.data,
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
  });

  return { ...query };
};
