import type { AxiosError } from 'axios';

import { useMutation } from '@tanstack/react-query';

import { useBuyStore } from '@/shared/lib/persistance';

import { createPayment } from '../../payment/payment.api';

export const useCreatePayment = () => {
  const { setlinkPayment } = useBuyStore();

  const mutation = useMutation({
    mutationFn: createPayment,
    onError: (error: AxiosError) => {
      throw error;
    },
    onSuccess: (data) => {
      const link = data?.data;
      if (link) setlinkPayment(link);
    },
    onSettled: () => {},
  });

  return {
    ...mutation,
  };
};
