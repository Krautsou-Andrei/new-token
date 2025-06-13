import { LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';

export const getRedirectUrl = (
  appUrl: string,
  encryptionKey: string,
  encryptionKeySecret: string,
  challenge?: string
) => {
  const url = new URL(appUrl);
  url.searchParams.append(
    LOCAL_STORAGE_CONSTANTS.DAPP_PUBLIC_KEY,
    encryptionKey
  );
  url.searchParams.append(
    LOCAL_STORAGE_CONSTANTS.DAPP_SECRET_KEY,
    encryptionKeySecret
  );

  if (challenge) {
    url.searchParams.append('challenge', challenge);
  }

  return url.toString();
};
