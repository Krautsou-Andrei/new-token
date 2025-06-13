import type { PutUserInfoDto, PutUserInfoResponse, RequestConfig } from 'api';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type PutUserInfoConfig = RequestConfig<PutUserInfoDto>;

export const putUserInfo = ({
  params,
  config,
}: PutUserInfoConfig): Promise<PutUserInfoResponse> => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.put(`/user-info/${params.userId}`, params, {
    ...headers,
    signal: config?.signal,
  });
};
