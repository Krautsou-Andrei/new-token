import type { JettonBalance } from '@ton-api/client';

export const getBalanceJettonAddress = (
  balances?: JettonBalance[],
  jettonAddressRaw?: string
): string => {
  if (balances && jettonAddressRaw) {
    for (const balance of balances) {
      if (balance.jetton.address === jettonAddressRaw) {
        return (
          Number(balance.balance) / Math.pow(10, balance.jetton.decimals)
        ).toFixed(2);
      }
    }
  }

  return '0';
};
