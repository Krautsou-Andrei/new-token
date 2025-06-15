import { env } from '@/shared/consts';

export const SLIDES: { title: string; currency?: string; address?: string }[] =
  [
    { title: 'Ton', currency: 'TON', address: env.minterTon },
    { title: 'СБП', currency: 'RUB' },
    { title: 'USDT', currency: 'USD', address: env.minterUSDT },
    { title: 'ЧХЗ' },
  ];
