import { env } from '@/shared/consts';

export const SLIDES: { title: string; address?: string }[] = [
  { title: 'Ton', address: env.minterTon },
  { title: 'СБП' },
  { title: 'USDT', address: env.minterUSDT },
  { title: 'ЧХЗ' },
];
