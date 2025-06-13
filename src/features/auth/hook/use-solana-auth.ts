import bs58 from 'bs58';

// import { useEffect } from 'react';
import nacl from 'tweetnacl';

import { useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletName } from '@solana/wallet-adapter-wallets';

import { challengeSolana } from '@/shared/api/auth/auth.api';
import { DEFAULT, LOCAL_STORAGE_CONSTANTS, ROUTES } from '@/shared/consts';
import { isMobileDevice } from '@/shared/lib/utils';

import { useGenerateToken } from './use-generate-token';

export const useSolanaAuth = () => {
  const {
    wallet,
    select,
    connect,
    publicKey,
    connected,
    signMessage,
    disconnect,
  } = useWallet();

  const { state, functions } = useGenerateToken(publicKey);

  const isMobile = isMobileDevice();

  const connectWallet = async () => {
    const keyPair = nacl.box.keyPair();

    const publicKey = keyPair.publicKey;
    const secretKey = keyPair.secretKey;

    const encryptionKey = bs58.encode(publicKey);
    const encryptionKeySecret = bs58.encode(secretKey);

    if (!encryptionKey && !encryptionKeySecret) {
      return;
    }
    try {
      const appUrl = window.location.origin;
      const redirectKeys = `${LOCAL_STORAGE_CONSTANTS.DAPP_PUBLIC_KEY}=${encryptionKey}${DEFAULT.PARCE}${LOCAL_STORAGE_CONSTANTS.DAPP_SECRET_KEY}=${encodeURIComponent(encryptionKeySecret)}`;
      const redirectLink = `${appUrl}${ROUTES.APP}?${DEFAULT.PARCE}=${encodeURIComponent(redirectKeys)}`;

      if (isMobile) {
        const params = {
          app_url: appUrl,
          dapp_encryption_public_key: encryptionKey,
          redirect_link: redirectLink,
          cluster: 'testnet',
        };

        const paramString = Object.entries(params)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&');

        const phantomUrl = `phantom://v1/connect?${paramString}`;

        window.location.href = phantomUrl;
      }
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  // useEffect(() => {
  //   if (!isMobile) {
  //     select(PhantomWalletName);
  //   }
  // }, [isMobile, select]);

  const handleSolanaAuth = async () => {
    try {
      if (!wallet && !isMobile) {
        select(PhantomWalletName);
      }

      // Нужно сохранять коннект кошелькая и проверять состояние, если коннект, тогда подтягивать данные из коннекта localStorage
      if (isMobile) {
        connectWallet();
        return;
      } else {
        if (publicKey) await connect();
      }

      if (!isMobile && publicKey) {
        if (!signMessage) {
          throw new Error('Кошелёк не поддерживает подпись сообщений');
        }

        const chalRes = await challengeSolana({
          publicKey: publicKey.toString(),
        });

        const { challenge } = await chalRes.data;

        const signed = await signMessage(new TextEncoder().encode(challenge));

        functions.setSignature(signed);
        functions.setChalRes(chalRes);
      }
    } catch (error) {
      console.error('Authorization error:', error);
    }
  };
  return {
    state: {
      connected,
      isAuthed: state.isAuthed,
      isFirst: state.isFirst,
      publicKey,
      wallet,
    },
    functions: { disconnect, setAuthed: functions.setAuthed, handleSolanaAuth },
  };
};
