import type { RequestConfig } from 'api';
import { type AxiosResponse } from 'axios';

import type { User } from '@/entities/session';

import { getAuthToken } from '@/shared/lib/persistance';

import apiInstance from '../api-instance';

export const addAuthorizationHeader = (config: any) => {
  const token = getAuthToken();

  const newConfig = { ...config };
  newConfig.headers = newConfig.headers || {};

  if (token) {
    newConfig.headers['Authorization'] = `Bearer ${token}`;
  }

  return newConfig;
};

export type AuthMeConfig = RequestConfig;
export const authMe = (config?: AuthMeConfig): Promise<AxiosResponse<User>> => {
  const newConfig = addAuthorizationHeader(config?.config);
  return apiInstance.get('/auth/me', newConfig);
};
