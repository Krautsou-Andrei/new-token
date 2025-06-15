import { useQueryClient } from '@tanstack/react-query';
import {
  type SendTransactionRequest,
  useTonConnectUI,
  useTonWallet,
} from '@tonconnect/ui-react';

import { env } from '@/shared/consts';

export const useStaking = () => {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const client = useQueryClient();

  const createMSG = async (
    id: number,
    amount: number,
    addressJetton: string,
    addressStaking: string
  ) => {
    console.log(id, amount, addressJetton, addressStaking);
    return {
      address: 'walletAddress' as string, //адрес, кужа отправляем
      amount: '150000000', //газ для транзакции
      payload: 'createPayload()', // тело сообщения
    };
  };

  const sendStaking = async (
    id: number,
    amount: number,
    addressJetton?: string
  ) => {
    const senderAddress = wallet?.account.address;
    const addressStaking = env.stakeMasterAddress;

    try {
      if (senderAddress && addressStaking && addressJetton && amount) {
        const msg = await createMSG(id, amount, senderAddress, addressStaking);

        const secondsInMinute = 60;
        const minutes = 10;
        const waitingTime = minutes * secondsInMinute;
        const transaction: SendTransactionRequest = {
          validUntil: Math.floor(Date.now() / 1000) + waitingTime,
          messages: [msg],
        };

        try {
          await tonConnectUI.sendTransaction(transaction);
          client.invalidateQueries();
        } catch (error) {
          /* empty */
        }
      }
    } catch (error) {
      /* empty */
    }
  };

  return { functions: { sendStaking } };
};
