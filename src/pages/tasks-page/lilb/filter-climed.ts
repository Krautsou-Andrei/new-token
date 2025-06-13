import { AWARDS } from '../const';

export const filterClaimed = (
  mapAutoTasks:
    | Map<
        string,
        {
          reward: number;
          isClaimed: boolean;
        }
      >
    | undefined,
  isInvert?: boolean
) => {
  return AWARDS.filter((award) => {
    const task = mapAutoTasks?.get(award.category);
    return isInvert ? task?.isClaimed !== true : task?.isClaimed === true;
  });
};
