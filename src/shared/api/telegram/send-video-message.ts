import type { EventVideo, RequestConfig, VideoMessageParams } from 'api';
import type { AxiosResponse } from 'axios';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type VideoMessageConfig = RequestConfig<VideoMessageParams> & {
  signal?: AbortSignal;
};

export const sendVideoMessageTelegram = (
  config: VideoMessageConfig
): Promise<AxiosResponse<EventVideo>> => {
  const newConfig = addAuthorizationHeader(config.config);
  const video_url = `${config.params.video_url}`;
  const tg_id = `${config.params.tg_id}`;

  return apiInstance.post(
    `/send_video_message`,
    { video_url, tg_id },
    {
      ...newConfig,
      signal: config?.signal,
    }
  );
};
