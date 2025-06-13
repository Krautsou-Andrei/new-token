import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { logOut } from '@/features/auth/lib';

import { useAuthMe } from '@/shared/api/hooks/auth';
import { ROUTES } from '@/shared/consts';
import { clearAuthDataInStore } from '@/shared/lib/persistance';

type IProfile = {
  username: string;
  instagramAccount: string | null;
  tiktokAccount: string | null;
  youtubeAccount: string | null;
};

export const useSettings = () => {
  const navigate = useNavigate();

  const { data: user, isSuccess, isLoading } = useAuthMe();
  const [profile, setProfile] = useState<IProfile>({
    username: '',
    instagramAccount: '',
    tiktokAccount: '',
    youtubeAccount: '',
  });

  const client = useQueryClient();

  const logout = () => {
    clearAuthDataInStore();

    logOut();
    client.clear();
    client.invalidateQueries();
    client.refetchQueries();
  };

  const handleBackToHome = () => {
    navigate({ to: ROUTES.APP });
  };

  const handleLogout = () => {
    logout();
    handleBackToHome();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      setProfile({
        username: user?.username || '',
        instagramAccount: user?.userInfo.instagramAccount || '',
        tiktokAccount: user?.userInfo.tiktokAccount || '',
        youtubeAccount: user?.userInfo.youtubeAccount || '',
      });
    }
  }, [
    isSuccess,
    user?.userInfo.instagramAccount,
    user?.userInfo.tiktokAccount,
    user?.userInfo.youtubeAccount,
    user?.username,
  ]);
  return {
    state: { isLoading, profile },
    functions: { handleBackToHome, handleOnChange, handleLogout },
  };
};
