import bs58 from 'bs58';

import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useLocation } from '@tanstack/react-router';

import { useGoogleAuth, useSolanaAuth, useTelegramAuth } from '@/features/auth';
import { useTelegramBotAuth } from '@/features/auth/hook/use-telegram-bot-auth';
import { useAwards } from '@/features/awards';

import { challengeSolana, solanaVerify } from '@/shared/api/auth/auth.api';
import { DEFAULT, LOCAL_STORAGE_CONSTANTS, ROUTES } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { getLocalStorage, setLocalStorage } from '@/shared/lib/local-storage';
import {
  setAuthToken,
  setSession,
  useAuthStore,
} from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';

import { decryptResponse, encryptPayload } from '../lib';

type ResponsePhantomMobileType = {
  public_key: string;
  session: string;
  signature?: string;
};

export const useAuthModal = () => {
  const { setIsConfety } = useModalStore();
  const { isAuthModalOpen, openAuthModal, closeAuthModal, token } =
    useAuthStore();
  const client = useQueryClient();
  const location = useLocation();

  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorMessageCode, setErroMessage] = useState<string | null>(null);
  const [isMobileAuth, setIsMobileAuth] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  const { state: stateGoogle, functions: functionsGoolge } = useGoogleAuth();
  const { state: stateSolana, functions: functionsSolana } = useSolanaAuth();
  const { state: stateTelegram, functions: functionsTelegram } =
    useTelegramAuth();
  useTelegramBotAuth(functionsTelegram.startAuthCheck);

  const { mapAutoTasks, handleMarkTaskAsCompleted, isLoading } = useAwards(
    Boolean(token)
  );

  const isAuthed =
    stateGoogle.isAuthed ||
    stateSolana.isAuthed ||
    stateTelegram.isAuthed ||
    isMobileAuth;

  const isFirstAll =
    stateGoogle.isFirst ||
    stateTelegram.isFirst ||
    isFirst ||
    stateSolana.isFirst;

  useEffect(() => {
    if (isAuthed || token) {
      closeAuthModal();
      client.invalidateQueries();
    }
  }, [client, closeAuthModal, isAuthed, token]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const checkConnectionResult = async () => {
      if (Array.from(searchParams.entries()).length > 0) {
        const parce = searchParams.get(DEFAULT.PARCE);
        const parceSplit = parce?.split(DEFAULT.PARCE);

        const errorCode = searchParams.get('errorCode');
        const errorMessage = searchParams.get('errorMessage');
        const data = searchParams.get('data');
        const phantom_encryption_public_key =
          searchParams.get('phantom_encryption_public_key') ||
          getLocalStorage(LOCAL_STORAGE_CONSTANTS.PHANTOM_PUBLIC_KEY);

        const dapp_public_key =
          parceSplit && parceSplit[0] ? parceSplit[0].split('=')[1] : null;
        const dapp_secret_key =
          parceSplit && parceSplit[1] ? parceSplit[1].split('=')[1] : null;
        const challenge =
          parceSplit && parceSplit[2] ? parceSplit[2].split('=')[1] : null;

        const nonce = searchParams.get('nonce');

        const publicKeyMobile = getLocalStorage(
          LOCAL_STORAGE_CONSTANTS.PUBLIC_KEY_MOBILE
        );

        if (
          phantom_encryption_public_key &&
          dapp_secret_key &&
          nonce &&
          data &&
          dapp_public_key
        ) {
          try {
            const dataDecode: ResponsePhantomMobileType = decryptResponse(
              data,
              nonce,
              phantom_encryption_public_key,
              dapp_secret_key
            );

            setData(`dataDecode: ${JSON.stringify(dataDecode)}`);
            if (challenge) {
              try {
                const verifyRes = await solanaVerify({
                  publicKey: publicKeyMobile,
                  signature: Array.from(
                    bs58.decode(dataDecode?.signature || '')
                  ),
                  challenge,
                });
                const dataToken = verifyRes.data;
                setAuthToken(dataToken.token);
                setLocalStorage(
                  LOCAL_STORAGE_CONSTANTS.TOKEN_SOLANA,
                  dataToken.token
                );
                setTimeout(async () => {
                  setIsConfety(true);
                  if (
                    mapAutoTasks &&
                    !mapAutoTasks?.get(AWARDS_TASKS.WELCOME_BONUS)?.isClaimed &&
                    !isFirst
                  ) {
                    console.log('modal');
                    setIsFirst(true);

                    await handleMarkTaskAsCompleted(AWARDS_TASKS.WELCOME_BONUS);
                    await handleMarkTaskAsCompleted(AWARDS_TASKS.WALLET);
                  }
                }, 500);
                setIsMobileAuth(true);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
              } catch (error) {
                /* empty */
              }
            } else {
              setLocalStorage(
                LOCAL_STORAGE_CONSTANTS.PUBLIC_KEY_MOBILE,
                dataDecode.public_key
              );
              setLocalStorage(
                LOCAL_STORAGE_CONSTANTS.PHANTOM_PUBLIC_KEY,
                phantom_encryption_public_key
              );
              setSession(dataDecode.session);

              setData(
                `dataDecode: ${`dataDecode.session: ${dataDecode.session}`}`
              );
              // setData(dataDecode.session);
            }

            setLocalStorage(
              LOCAL_STORAGE_CONSTANTS.DAPP_SECRET_KEY,
              dapp_secret_key
            );

            if (!challenge) {
              try {
                const chalRes = await challengeSolana({
                  publicKey: dataDecode.public_key,
                });

                const { challenge } = await chalRes.data;
                const messageBytes = new TextEncoder().encode(challenge);
                const encodedMessage = bs58.encode(messageBytes);

                const payload = {
                  message: encodedMessage,
                  session: dataDecode.session,
                  display: 'utf8',
                };

                setData(`dataDecode: ${`payload: ${JSON.stringify(payload)}`}`);

                const { encryptedPayload, nonce } = encryptPayload(
                  payload,
                  phantom_encryption_public_key,
                  bs58.decode(dapp_secret_key)
                );

                setData(
                  `dataDecode: ${`encryptedPayload: ${JSON.stringify(encryptedPayload)}`}`
                );

                const redirectKeys = `${LOCAL_STORAGE_CONSTANTS.DAPP_PUBLIC_KEY}=${dapp_public_key}${DEFAULT.PARCE}${LOCAL_STORAGE_CONSTANTS.DAPP_SECRET_KEY}=${dapp_secret_key}${DEFAULT.PARCE}challenge=${challenge}`;
                const redirectLink = `${window.location.origin}${ROUTES.APP}?${DEFAULT.PARCE}=${redirectKeys}`;
                const signUrl =
                  `https://phantom.app/ul/v1/signMessage?` +
                  `dapp_encryption_public_key=${encodeURIComponent(dapp_public_key)}&` +
                  `nonce=${encodeURIComponent(nonce)}&` +
                  `redirect_link=${encodeURIComponent(redirectLink)}&` +
                  `payload=${encodeURIComponent(encryptedPayload)}`;

                setData(
                  `dataDecode: ${`signUrl: ${JSON.stringify({ signUrl: signUrl, session: dataDecode.session, public_key: dataDecode.public_key, challenge: challenge })}`}`
                );

                window.location.href = signUrl;
              } catch (error) {
                setData(
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-expect-error
                  `dataDecode: ${`catch: ${JSON.stringify(error.message)}`}`
                );
                /* empty */
              }
            }
          } catch (error) {
            setData(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              `dataDecode: ${`signUrl: ${JSON.stringify(error.message)}`}`
            );
            console.error(
              'Ошибка расшифровки: данные не могут быть расшифрованы'
            );
          }
        } else {
          const paramsObject: { [key: string]: string } = {};
          searchParams.forEach((value, key) => {
            paramsObject[key] = value;
          });
          setData(
            `else: ${JSON.stringify({ phantom_encryption_public_key: phantom_encryption_public_key, dapp_secret_key: dapp_secret_key, nonce: nonce, data: data, dapp_public_key: dapp_public_key, paramsObject: paramsObject })}`
          );
          /* empty */
        }

        if (errorCode) {
          setErroMessage(errorMessage);
          setError(errorCode);

          return;
        }
      }
    };

    checkConnectionResult();
  }, [
    handleMarkTaskAsCompleted,
    isFirst,
    isMobileAuth,
    location.search,
    mapAutoTasks,
    setIsConfety,
  ]);

  return {
    state: {
      isFirst: isFirstAll,
      isMobileAuth,
      isAuthed,
      isAuthModalOpen,
      isLoading: isLoading || stateTelegram.isLoading,
      data,
      error,
      errorMessageCode,
      wallet: stateSolana.wallet,
    },
    functions: {
      closeAuthModal,
      openAuthModal,
      handleGoogleAuth: functionsGoolge.handleGoogleAuth,
      handleSolanaAuth: functionsSolana.handleSolanaAuth,
      handleTelegramAuth: functionsTelegram.handleTelegramAuth,
    },
  };
};
