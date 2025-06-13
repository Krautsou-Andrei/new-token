import type { Video } from 'api';
import { useEffect } from 'react';

import { useAwards } from '@/features/awards';
import { groupVideosByDate } from '@/features/income';

import { useGetAllVideo } from '@/shared/api/hooks/video';
import { DEFAULT } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

type GroupedVideo = {
  date: string;
  videos: Video[];
};

export const useVideoStep = () => {
  const stepsProgressArr = [5, 10, 15, 20, 25];

  const { data: allvideo } = useGetAllVideo();
  const { mapAutoTasks, handleMarkTaskAsCompleted } = useAwards();
  const { setIsConfety } = useModalStore();

  const findIndexOfShortArray = (arrays: GroupedVideo[]) => {
    for (let i = 1; i < arrays.length; i++) {
      if (arrays[i]?.videos?.length < DEFAULT.VIDEO_ONE_DAYS) {
        return i;
      }
    }

    if (arrays[arrays.length - 1]?.videos?.length >= 5) {
      return arrays.length;
    }
    return -1;
  };

  const grouped: GroupedVideo[] = groupVideosByDate(
    allvideo,
    DEFAULT.VIDEO_STEP
  );
  const index = findIndexOfShortArray(grouped);

  const currentCount = grouped[0]?.videos?.length;

  const currentStep =
    index && currentCount >= DEFAULT.VIDEO_ONE_DAYS ? index : index - 1 || 0;

  const lastCountVideo = DEFAULT.VIDEO_STEP - currentCount;

  useEffect(() => {
    if (
      currentCount === DEFAULT.VIDEO_ONE_DAYS &&
      mapAutoTasks &&
      !mapAutoTasks?.get(AWARDS_TASKS.WATCH_START_VIDEO)?.isClaimed
    ) {
      const getAwards = async () => {
        await handleMarkTaskAsCompleted(AWARDS_TASKS.WATCH_START_VIDEO);
        setIsConfety(true);
      };

      getAwards();
    }
  }, [currentCount, handleMarkTaskAsCompleted, mapAutoTasks, setIsConfety]);

  return {
    state: { currentCount, currentStep, lastCountVideo, stepsProgressArr },
  };
};
