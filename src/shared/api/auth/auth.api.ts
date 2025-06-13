import type {
  LoginPayload,
  LoginResponse,
  LoginResponseData,
  RequestConfig,
} from 'api';

import apiInstance from '../api-instance';

export type LoginConfig = RequestConfig<LoginPayload>;

export const login = (config: LoginConfig): Promise<LoginResponse> => {
  return apiInstance.post(
    `/auth/login`,
    config.params.initData,
    config?.config
  );
};

interface GoogleAuthParams {
  email: string;
  access_token: string;
}

export const loginWithGoogle = async (params: GoogleAuthParams) => {
  const response = await apiInstance.post<LoginResponseData>('/auth/google', {
    access_token: params.access_token,
  });
  return response;
};

export const challengeSolana = async (params: { publicKey: string }) => {
  const response = await apiInstance.post('/auth/solana/challenge', {
    publicKey: params.publicKey,
  });
  return response;
};

export const solanaVerify = async (params: {
  publicKey: string;
  signature: any;
  challenge: any;
}) => {
  const response = await apiInstance.post<LoginResponseData>(
    '/auth/solana/verify',
    {
      publicKey: params.publicKey,
      signature: params.signature,
      challenge: params.challenge,
    }
  );
  return response;
};

export const checkTelegramBotAuth = async (access_token: string) => {
  const response = await apiInstance.post<LoginResponse>('/auth/telegram', {
    access_token: access_token,
  });
  return response;
};
