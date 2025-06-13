import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { liderboardVideo } from '../../video/video.api';

export const useGetLiderboardVideo = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.LIDEER_VIDEO],
    queryFn: async ({ signal }) => {
      try {
        return await liderboardVideo({
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
