import type {
  CreateVideoDto,
  Lider,
  RequestConfig,
  Video,
  VideoReward,
} from 'api';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type CreateVideoConfig = RequestConfig<CreateVideoDto>;
export type getVideoConfig = RequestConfig;
export type RewardVideoConfig = RequestConfig<VideoReward>;

export const createVideo = ({ params, config }: CreateVideoConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post<string>('/video/new', params, {
    ...headers,
    signal: config?.signal,
  });
};

export const allVideo = ({ config }: getVideoConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<Video[]>('/video/all_user_videos', {
    ...headers,
    signal: config?.signal,
  });
};

export const liderboardVideo = ({ config }: getVideoConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<Lider>('/video/leaders', {
    ...headers,
    signal: config?.signal,
  });
};

export const viewsdVideo = ({ config }: getVideoConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.get<string>('/video/video_views', {
    ...headers,
    signal: config?.signal,
  });
};

export const rewardVideo = ({ params, config }: RewardVideoConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post<string>('/video/reward', params, {
    ...headers,
    signal: config?.signal,
  });
};
