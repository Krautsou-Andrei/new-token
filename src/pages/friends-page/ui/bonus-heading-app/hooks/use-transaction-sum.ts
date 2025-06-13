import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetTransactionSumData } from '@/shared/api/hooks/transactions/use-get-transaction-sum';

export const useTransactionSum = () => {
  const { data: user } = useAuthMe();

  const { data, isLoading } = useGetTransactionSumData(
    user?.id || '',
    Boolean(user?.id)
  );

  return { state: { data, isLoading } };
};
