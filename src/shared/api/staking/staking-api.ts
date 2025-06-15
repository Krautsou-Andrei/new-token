import type { RequestConfig } from 'api';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type GetStakingBalanceConfig = RequestConfig & {
  signal?: AbortSignal;
};
export type GetAllStakingUserConfig = RequestConfig<{ tgId: string }> & {
  signal?: AbortSignal;
};
export type GetReferralStakingConfig = RequestConfig<{ tgId: string }> & {
  signal?: AbortSignal;
};
export type StakingConfig = RequestConfig<{ tgId: string; amount: number }> & {
  signal?: AbortSignal;
};
export type StakingClaimConfig = RequestConfig<{ tgId: string }> & {
  signal?: AbortSignal;
};
export type StakingByIdConfig = RequestConfig<{ id: string }> & {
  signal?: AbortSignal;
};

export const balanceStaking = ({ config }: GetStakingBalanceConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post(
    '/staking/balance',
    {},
    {
      ...headers,
      signal: config?.signal,
    }
  );
};

export const getAllStakingUser = ({
  params,
  config,
}: GetAllStakingUserConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<void>(`/staking/user/${params.tgId}`, {
    ...headers,
    signal: config?.signal,
  });
};

export const getReferralStaking = ({
  params,
  config,
}: GetReferralStakingConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<void>(`/staking/referral/${params.tgId}`, {
    ...headers,
    signal: config?.signal,
  });
};

export const staking = ({ params, config }: StakingConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post(
    '/staking',
    { ...params },
    {
      ...headers,
      signal: config?.signal,
    }
  );
};

export const stakingClaim = ({ params, config }: StakingConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post(
    '/staking/claim',
    { ...params },
    {
      ...headers,
      signal: config?.signal,
    }
  );
};

export const getStakingById = ({ params, config }: StakingByIdConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<void>(`/staking/${params.id}`, {
    ...headers,
    signal: config?.signal,
  });
};
