import bs58 from 'bs58';

import nacl from 'tweetnacl';

export function decryptResponse(
  data: string,
  nonce: string,
  phantom_encryption_public_key: string,
  dapp_secret_key: string
): any {
  const decodedPublicKey = bs58.decode(phantom_encryption_public_key);
  const decodedSecretKey = bs58.decode(dapp_secret_key);
  const nonceBytes = bs58.decode(nonce);
  const encryptedData = bs58.decode(data);

  const decrypted = nacl.box.open(
    encryptedData,
    nonceBytes,
    decodedPublicKey,
    decodedSecretKey
  );

  if (!decrypted) {
    throw new Error('Не удалось расшифровать ответ');
  }
  const decryptedMessage = new TextDecoder().decode(decrypted);
  const dataDecode = JSON.parse(decryptedMessage);

  return dataDecode;
}
