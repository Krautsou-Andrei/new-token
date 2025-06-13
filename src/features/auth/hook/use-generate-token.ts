import type { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import type { PublicKey } from '@solana/web3.js';

import { useAwards } from '@/features/awards';

import { solanaVerify } from '@/shared/api/auth/auth.api';
import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { setLocalStorage } from '@/shared/lib/local-storage';
import { setAuthToken, useAuthStore } from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

export const useGenerateToken = (publicKey: PublicKey | null) => {
  const { setIsConfety } = useModalStore();
  const { token } = useAuthStore();

  const [isAuthed, setAuthed] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [signature, setSignature] =
    useState<Uint8Array<ArrayBufferLike> | null>(null);
  const [chalRes, setChalRes] = useState<AxiosResponse<any, any> | null>(null);

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
        await handleMarkTaskAsCompleted(AWARDS_TASKS.WALLET);
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

  useEffect(() => {
    const getToken = async (
      publicKey: string,
      signature: Uint8Array<ArrayBufferLike>,
      chalRes: AxiosResponse<any, any>
    ) => {
      try {
        const { challenge } = await chalRes.data;
        const verifyRes = await solanaVerify({
          publicKey: publicKey,
          signature: Array.from(signature),
          challenge,
        });
        const data = verifyRes.data;
        // например, сохраняем в состояние или localStorage
        // setUser(data.user);
        setAuthToken(data.token);
        setLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN_SOLANA, data.token);

        setChalRes(null);
        setChalRes(null);

        setAuthed(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        /* empty */
      }
    };
    if (signature && publicKey && chalRes) {
      getToken(publicKey.toString(), signature, chalRes);
    }
  }, [chalRes, handleMarkTaskAsCompleted, mapAutoTasks, publicKey, signature]);

  return {
    state: { isAuthed, isFirst },
    functions: { setAuthed, setChalRes, setSignature },
  };
};
