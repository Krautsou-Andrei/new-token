import { useEffect, useState } from 'react';

import { useAwards } from '@/features/awards';

import { telegramAuthApi } from '@/shared/api/hooks/auth';
import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { getLocalStorage } from '@/shared/lib/local-storage';
import { setAuthToken, useAuthStore } from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { isIphone } from '@/shared/lib/utils';

export const useTelegramAuth = () => {
  const { setIsConfety } = useModalStore();
  const { token } = useAuthStore();

  const [isAuthed, setAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isIphoneMobile = isIphone();

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

  const startAuthCheck = (token: string) => {
    setIsLoading(true);
    const interval = setInterval(async () => {
      try {
        const response = await telegramAuthApi.checkAuthStatus(token);

        if (response.token) {
          clearInterval(interval);

          setAuthToken(response.token);
          setAuthed(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    }, 3000); // Проверяем каждые 3 секунды

    // Останавливаем проверку через 1 минуту
    setTimeout(() => clearInterval(interval), 60000);
  };

  const handleTelegramAuth = async () => {
    // Генерация уникального токена и перенаправление к боту
    // В реальной реализации нужно сначала запросить токен с бэкенда
    const linkRef = getLocalStorage(LOCAL_STORAGE_CONSTANTS.LINK_REF);
    const getToken = await telegramAuthApi.requestTempToken();
    const token = getToken.token;
    const botUrl = `https://t.me/hf_auth_bot?start=${token}${linkRef ? `_${linkRef}` : ''}`;

    if (isIphoneMobile) {
      const currentLink = window.location.href;
      window.open(currentLink, '_blank');
      window.location.href = botUrl;
    } else {
      window.open(botUrl, '_blank', 'noopener,noreferrer');
    }
    // Сохраняем токен для последующей проверки

    setAuthToken(token);

    // Запускаем интервал проверки статуса авторизации
    startAuthCheck(token);
  };

  return {
    state: { isAuthed, isFirst, isLoading },
    functions: { handleTelegramAuth, startAuthCheck },
  };
};
