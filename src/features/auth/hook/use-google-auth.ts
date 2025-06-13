import { useEffect, useState } from 'react';

import { useGoogleLogin } from '@react-oauth/google';

import { useAwards } from '@/features/awards';

import { loginWithGoogle } from '@/shared/api/auth/auth.api';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { setAuthToken, useAuthStore } from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

export const useGoogleAuth = () => {
  const { setIsConfety } = useModalStore();
  const { token } = useAuthStore();

  const [isAuthed, setAuthed] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  const { mapAutoTasks, handleMarkTaskAsCompleted } = useAwards(Boolean(token));

  useEffect(() => {
    const getBonus = async () => {
      if (
        mapAutoTasks &&
        !mapAutoTasks?.get(AWARDS_TASKS.WELCOME_BONUS)?.isClaimed &&
        !isFirst
      ) {
        setIsFirst(true);
        setIsConfety(true);

        await handleMarkTaskAsCompleted(AWARDS_TASKS.WELCOME_BONUS);
      }
    };
    if (isAuthed) {
      setTimeout(() => getBonus(), 500);
    }
  }, [
    handleMarkTaskAsCompleted,
    isAuthed,
    isFirst,
    mapAutoTasks,
    setIsConfety,
  ]);

  // Получаем данные пользователя через Google OAuth
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      try {
        const userInfo = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        ).then((res) => res.json());

        // eslint-disable-next-line no-useless-catch
        try {
          const response = await loginWithGoogle({
            email: userInfo.email,
            access_token: tokenResponse.access_token,
          });
          setAuthToken(response.data.token);

          // const token = response.data.token;
          // saveToken(token);
          setAuthed(true);

          // return response;
        } catch (error) {
          // showErrorMessage(t(LOCAL_TEXT.AUTHENTICATION_FAILED));
          throw error;
        }

        // authWithGoogle({
        //     email: userInfo.email,
        //     access_token: tokenResponse.access_token,
        // });
        // window.location.replace('/profile');
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    },
    onError: (error) => {
      console.error('Google login failed:', error);
    },
    scope: 'email profile', // Добавляем scope для получения email
  });

  const handleGoogleAuth = () => {
    googleLogin();
  };
  return { state: { isAuthed, isFirst }, functions: { handleGoogleAuth } };
};
