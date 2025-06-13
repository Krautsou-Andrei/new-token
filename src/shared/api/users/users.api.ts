import type {
  GetAllUsersDataResponse,
  GetRefDataParams,
  GetRefDataResponse,
  GetReferealResponse,
  GetUserDataResponse,
  RequestConfig,
} from 'api';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type GetAllUsersDataConfig = {
  signal?: AbortSignal;
};

export type GetUserDataConfig = {
  signal?: AbortSignal;
};

export type GetRefDataConfig = RequestConfig<GetRefDataParams> & {
  signal?: AbortSignal;
};

export type GetRefralsConfig = RequestConfig<{ userId: string }> & {
  signal?: AbortSignal;
};

export const getAllUsersData = (
  config: GetAllUsersDataConfig
): Promise<GetAllUsersDataResponse> => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get(`/users`, {
    ...headers,
    signal: config?.signal,
  });
};

export const getUserData = (
  config: GetUserDataConfig
): Promise<GetUserDataResponse> => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get(`/users/get_user_data`, {
    ...headers,
    signal: config?.signal,
  });
};

export const getRefData = (
  config: GetRefDataConfig
): Promise<GetRefDataResponse> => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get(`/users/referals_info`, {
    ...headers,
    signal: config?.signal,
  });
};

export const getReferals = ({
  params,
  config,
}: GetRefralsConfig): Promise<GetReferealResponse> => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get(`/users/${params.userId}/referrals`, {
    ...headers,
    signal: config?.signal,
  });
};
