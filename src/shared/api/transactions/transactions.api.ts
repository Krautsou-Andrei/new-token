import type { GetTransactionSumDataResponse } from 'api';

import apiInstance from '../api-instance';
import { addAuthorizationHeader } from '../auth/me';

export type GetTransactionSumConfig = { userId: string; signal?: AbortSignal };

export const getTransactionByType = (
  config: GetTransactionSumConfig
): Promise<GetTransactionSumDataResponse> => {
  const newConfig = addAuthorizationHeader(config);
  return apiInstance.post(
    `/transactions/sum-by-type`,
    { toUserId: 1, type: 'REFERAL' },
    newConfig
  );
};
