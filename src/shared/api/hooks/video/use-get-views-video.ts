import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/consts';

import { viewsdVideo } from '../../video/video.api';

export const useGetViewsVideo = () => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.VIEWS],
    queryFn: async ({ signal }) => {
      try {
        return await viewsdVideo({
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
