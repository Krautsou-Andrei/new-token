import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';

import { AWARDS } from '../const';

const SPECIAL_TASKS = [AWARDS_TASKS.BYBIT];

export const sortClimed = (
  mapAutoTasks:
    | Map<
        string,
        {
          reward: number;
          isClaimed: boolean;
        }
      >
    | undefined
) => {
  return AWARDS.sort((a, b) => {
    const isASpecial = SPECIAL_TASKS.includes(a.category);
    const isBSpecial = SPECIAL_TASKS.includes(b.category);

    // SPECIAL_TASKS всегда сверху
    if (isASpecial && !isBSpecial) return -1;
    if (!isASpecial && isBSpecial) return 1;

    // Затем сортировка по isClaimed
    const aClaimed = mapAutoTasks?.get(a.category)?.isClaimed ? 1 : 0;
    const bClaimed = mapAutoTasks?.get(b.category)?.isClaimed ? 1 : 0;

    return aClaimed - bClaimed;
  });
};
