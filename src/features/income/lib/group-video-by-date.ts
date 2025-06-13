import type { Video } from 'api';

export const groupVideosByDate = (
  videos: Video[] | undefined,
  days: number
) => {
  if (!videos) {
    return [];
  }
  const today = new Date();
  const groupedVideos: { date: string; videos: Video[] }[] = [];

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];

    const dailyVideos = videos.filter((video) => {
      const videoDate = new Date(video.createdAt);

      return videoDate.toISOString().split('T')[0] === dateKey;
    });

    groupedVideos.push({ date: dateKey, videos: dailyVideos });
  }

  return groupedVideos;
};
