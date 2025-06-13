import apiJwt from '../../api-jwt';

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email?: string;
    walletAddress?: string;
    telegramId?: string;
    username?: string;
  };
}

export interface TelegramTokenRequest {
  provider: 'telegram';
}

export interface TelegramTokenResponse {
  token: string; // Временный токен для проверки статуса
}

export const telegramAuthApi = {
  // 1. Запрос временного токена
  async requestTempToken(): Promise<TelegramTokenResponse> {
    const response =
      await apiJwt.post<TelegramTokenResponse>(`/auth/telegram-token`);
    return response.data;
  },

  // 2. Проверка статуса авторизации
  async checkAuthStatus(token: string): Promise<AuthResponse> {
    const response = await apiJwt.post<AuthResponse>(`/auth/telegram/`, {
      access_token: token,
    });
    return response.data;
  },
};
