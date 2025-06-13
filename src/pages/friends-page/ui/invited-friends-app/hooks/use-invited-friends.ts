import { useAuthMe } from '@/shared/api/hooks/auth';
import { useGetReferals } from '@/shared/api/hooks/users/use-get-refarals';

export const useInvitedFriends = () => {
  const { data: user } = useAuthMe();
  const { data: referals, isLoading } = useGetReferals(
    user?.id,
    Boolean(user?.id)
  );

  return { state: { referals, isLoading } };
};
