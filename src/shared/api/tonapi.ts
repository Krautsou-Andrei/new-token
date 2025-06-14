/* eslint-disable no-useless-catch */
import { Buffer } from 'buffer';

import { Api, HttpClient } from '@ton-api/client';
import { Address, Cell } from '@ton/core';

import { env } from '../consts';

const httpClient = new HttpClient({
  baseUrl: `${env.tonapiUrl}`,
  baseApiParams: {
    headers: {
      'Content-type': 'application/json',
    },
  },
});

export const tonapi = new Api(httpClient);

export async function waitForTx(msgHash: string, attempt = 0) {
  try {
    return await tonapi.blockchain.getBlockchainTransactionByMessageHash(
      msgHash
    );
  } catch (e) {
    if (attempt >= 10) {
      throw e;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return waitForTx(msgHash, attempt + 1);
  }
}

export async function getJettonWalletAddress(
  jettonMasterAddress: string,
  walletAddress: string,
  isArrdess?: boolean
): Promise<string | Address> {
  try {
    const result = await tonapi.blockchain.execGetMethodForBlockchainAccount(
      jettonMasterAddress,
      'get_wallet_address',
      {
        args: [walletAddress],
      }
    );

    if (isArrdess) {
      const readAddress = (cell: string) =>
        Cell.fromBoc(Buffer.from(cell, 'hex'))[0].beginParse().loadAddress();
      const res = readAddress(result.stack[0].cell as string);

      return res;
    }

    return result.decoded.jetton_wallet_address;
  } catch (error) {
    throw error;
  }
}

export async function getListJetton(address: string) {
  try {
    const result = await tonapi.accounts.getAccountJettonsBalances(address);

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getJettonMeta(address: string) {
  try {
    const result = await tonapi.jettons.getJettonInfo(address);

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getJettonBalances(
  address: string,
  currencies?: string[]
) {
  try {
    const result = await tonapi.accounts.getAccountJettonsBalances(address, {
      currencies: currencies?.join() || ['ton', 'usd', 'rub'].join(),
    });

    return result;
  } catch (error) {
    throw error;
  }
}

export const getParseAddress = async (addressWalletRaw: string) => {
  try {
    const result = await tonapi.accounts.addressParse(addressWalletRaw);

    return result;
  } catch (error) {
    throw error;
  }
};

export const getJettonHistory = async (
  addressCheck: string,
  addressJetton: string,
  startDate?: number
) => {
  try {
    const result = await tonapi.accounts.getAccountJettonHistoryById(
      addressCheck,
      addressJetton,
      { limit: 100, start_date: startDate }
    );

    return result;
  } catch (error) {
    throw error;
  }
};

export const getAccountEvents = async (
  addressCheck: string,
  startDate?: number
) => {
  try {
    const result = await tonapi.accounts.getAccountEvents(addressCheck, {
      limit: 100,
      start_date: startDate,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export const getAccountDns = async (address: string) => {
  try {
    const result = await tonapi.accounts.accountDnsBackResolve(address);

    return result;
  } catch (error) {
    throw error;
  }
};

export const getAccount = async (addressRaw: string) => {
  try {
    const result = await tonapi.accounts.getAccount(addressRaw);

    return result;
  } catch (error) {
    throw error;
  }
};
