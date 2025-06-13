import bs58 from 'bs58';

import nacl from 'tweetnacl';

export function encryptPayload(
  payload: object,
  phantomPublicKey: string,
  dappSecretKey: Uint8Array
): { encryptedPayload: string; nonce: string } {
  try {
    const nonce = nacl.randomBytes(24);
    const phantomPublicKeyBytes = bs58.decode(phantomPublicKey);
    const sharedSecret = nacl.box.before(phantomPublicKeyBytes, dappSecretKey);
    const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));
    const encryptedBytes = nacl.box.after(payloadBytes, nonce, sharedSecret);

    return {
      encryptedPayload: bs58.encode(encryptedBytes),
      nonce: bs58.encode(nonce),
    };
  } catch (error) {
    console.error('Ошибка при кодировании:', error);
    throw new Error('Не удалось зашифровать данные');
  }
}
