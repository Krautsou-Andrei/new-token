import type { AwardsCategory } from './awards-category';

export type AwardsType = {
  name: AwardsCategory;
  reward: number;
  isClaimed: boolean;
  pending?: boolean;
};
