import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetPresaleTokenSumData } from '@/shared/api/hooks/payment/use-get-presale-balance';

export const usePresaleTokenSum = () => {
  const { data: user } = useAuthMe();

  const { data, isLoading } = useGetPresaleTokenSumData(
    user?.id || '',
    Boolean(user?.id)
  );

  return { state: { data, isLoading } };
};
