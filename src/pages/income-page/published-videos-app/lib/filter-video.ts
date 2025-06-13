import type { Video } from 'api';

export const filterVideo = (
  allVideo: Video[] | undefined,
  isEnded: boolean = false
) => {
  if (allVideo) {
    return allVideo.filter((video) => {
      return isEnded ? video?.isActive !== true : video?.isActive === true;
    });
  }
  return [];
};
