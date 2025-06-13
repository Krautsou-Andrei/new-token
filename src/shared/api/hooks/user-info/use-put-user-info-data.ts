import { useMutation } from '@tanstack/react-query';

import { putUserInfo } from '../../user-info/user-info.api';

export const usePutUserInfo = () => {
  return useMutation({
    mutationFn: putUserInfo,
    onError: () => {
      console.error('Ошибка получения данных пользователя');
    },
  });
};
