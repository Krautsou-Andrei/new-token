import type { PaymentDto, RequestConfig } from 'api';
import type { GetPresaleTokenSumDataResponse } from 'api';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type CreatePaymentConfig = RequestConfig<PaymentDto>;

export const createPayment = ({ params, config }: CreatePaymentConfig) => {
  const headers = addAuthorizationHeader(config);

  return apiInstance.post<string>('/payment', params, {
    ...headers,
    signal: config?.signal,
  });
};

export type GetPresaleTokenSumConfig = { userId: string; signal?: AbortSignal };

export const getPresaleTokenSum = (
  config: GetPresaleTokenSumConfig
): Promise<GetPresaleTokenSumDataResponse> => {
  const newConfig = addAuthorizationHeader(config);
  return apiInstance.get(
    `/payment/presale-balance?user_id=${config.userId}`,
    newConfig
  );
};
