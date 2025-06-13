declare module 'api' {
  import type { AxiosRequestConfig, AxiosResponse } from 'axios';

  export type EventVideo = {
    id: number;
    progressProjectId: string;
    projectId: number;
    userId: number;
    role: Role;
    message: string;
    eventType: EventType;
    description?: string;
    createdAt: Date;
    details?: EventDetails;
  };

  export type PaymentDto = {
    tokenAmount: number;
  };

  export type presaleTokensSumDataResponse = {
    tokenAmount: number;
  };

  export type CreateVideoDto = {
    url: string;
  };

  export type LoginPayload = {
    initData: { initData: string };
  };

  export type Lider = {
    place: number;
    videoCount: number;
    more?: {
      name: string;
      place: number;
      videoCount: number;
    };
    less?: {
      name: string;
      place: number;
      videoCount: number;
    };
  };

  export type Video = {
    id: number;
    url: string;
    userId: number;
    views: number;
    likes: number;
    comments: number;
    reward: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };

  export type LoginResponseData = {
    token: string;
    user: User;
  };

  export type RefDataResponse = {
    refLink: string;
    count: number;
  };

  export type ReferalsResponse = {
    referals: [
      {
        username: string;
        balance: number;
        balance_usdt: number;
        createdAt?: string;
      },
    ];
  };

  export type UserDataResponse = {
    id: number;
    telegramId: string;
    username: string;
    role: string;
    balance: string;
    isBaned: boolean;
    isVerified: boolean;
    createdAt: string;
    inviterRefCode: string;
    refCode: string;
  };

  export type AllUsersDataResponse = UserDataResponse[];

  export type transactionSumDataResponse = {
    amount: string;
  };

  export type VideoMessageParams = {
    video_url: string;
    tg_id: string;
  };

  export type VideoReward = {
    videoId: number;
  };
  export type PutUserInfoDto = {
    userId: string;
    name?: string;
    username?: string;
    instagramAccount?: string;
    tiktokAccount?: string;
    youtubeAccount?: string;
    email?: string;
    tonWalletAddress?: string;
    bybitWalletAddress?: string;
    avatarUrl?: string;
  };

  export type LoginResponse = AxiosResponse<LoginResponseData>;
  export type GetRefDataResponse = AxiosResponse<RefDataResponse>;
  export type GetReferealResponse = AxiosResponse<ReferalsResponse>;
  export type GetAllUsersDataResponse = AxiosResponse<AllUsersDataResponse>;
  export type GetUserDataResponse = AxiosResponse<UserDataResponse>;
  export type GetTransactionSumDataResponse = AxiosResponse<transactionSumData>;
  export type PutUserInfoResponse = AxiosResponse<UserInfo>;
  export type GetPresaleTokenSumDataResponse =
    AxiosResponse<presaleTokensSumDataResponse>;

  export interface GetRefDataParams {
    telegramId: string;
  }

  export interface GetUserDataParams {
    userId: string;
  }

  export type ApiRequestConfig = AxiosRequestConfig & {
    signal?: AbortSignal;
  };

  export type RequestConfig<Params = undefined> = Params extends undefined
    ? { config?: ApiRequestConfig }
    : { params: Params; config?: ApiRequestConfig };
}
