import { useMutation } from '@tanstack/react-query';

import { setAuthToken } from '@/shared/lib/persistance';
import { showErrorMessage } from '@/shared/lib/utils/notify';

import { loginWithGoogle } from '../../auth/auth.api';

interface GoogleAuthParams {
  email: string;
  access_token: string;
}

export const useGoogleAuth = () => {
  return useMutation({
    mutationFn: async ({ email, access_token }: GoogleAuthParams) => {
      try {
        const response = await loginWithGoogle({
          email,
          access_token,
        });
        setAuthToken(response.data.token);

        return response;
      } catch (error) {
        showErrorMessage('Аутентификация не удалась');
        throw error;
      }
    },
  });
};
