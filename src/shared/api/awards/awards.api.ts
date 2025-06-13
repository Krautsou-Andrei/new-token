import type { RequestConfig } from 'api';

import type { AwardsCategory, AwardsType } from '@/entities/awards';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type GetAllAwardsConfig = RequestConfig & {
  signal?: AbortSignal;
};

export const getAllAwards = ({ config }: GetAllAwardsConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<AwardsType[]>('/auto-tasks', {
    ...headers,
    signal: config?.signal,
  });
};

export type ClaimAwardsRewardConfig = RequestConfig<{
  taskName: AwardsCategory;
  signal?: AbortSignal;
}>;

export const claimAwardsReward = ({
  params,
  config,
}: ClaimAwardsRewardConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post<void>(
    '/auto-tasks/name-claim',
    { taskName: params.taskName },
    {
      ...headers,
      signal: config?.signal,
    }
  );
};
