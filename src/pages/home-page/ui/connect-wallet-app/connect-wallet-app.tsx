import { useTranslation } from 'react-i18next';

import { Box, Button } from '@chakra-ui/react';

import { useSolanaAuth } from '@/features/auth';
import { useAwards } from '@/features/awards';

import { DEFAULT, LOCAL_STORAGE_CONSTANTS } from '@/shared/consts';
import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { getLocalStorage } from '@/shared/lib/local-storage';
import { formatNumberWithSpaces } from '@/shared/lib/utils/format-numbers';
import { AppCardDescriptions } from '@/shared/ui/app-card-descriptions';
import { AppIcon } from '@/shared/ui/app-icon';

export const ConnectWalletApp = () => {
  const { mapAutoTasks, handleMarkTaskAsCompleted, isLoading } =
    useAwards(true);
  const { functions: functionsSolana } = useSolanaAuth();
  const { t } = useTranslation();

  const walletTask = mapAutoTasks?.get(AWARDS_TASKS.WALLET);
  const tokenSolana = getLocalStorage(LOCAL_STORAGE_CONSTANTS.TOKEN_SOLANA);

  return (
    <AppCardDescriptions
      cursor={'pointer'}
      descriptions={`+${formatNumberWithSpaces(walletTask?.reward || 0)} ${DEFAULT.TOKEN}`}
      cardTitle={t(LOCAL_TEXT.HOME_PAGE.CONNECT_WALLET)}
      iconName="icon/wallet"
      gap={3}
      onClick={() => {
        if (!tokenSolana && !walletTask?.isClaimed)
          functionsSolana.handleSolanaAuth();
      }}
    >
      {tokenSolana && !isLoading && !walletTask?.isClaimed && (
        <Box alignSelf={'end'}>
          <Button
            variant="outlineSm"
            width={'fit-content'}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleMarkTaskAsCompleted(AWARDS_TASKS.WALLET);
            }}
          >
            {t(LOCAL_TEXT.CLAIM)}
          </Button>
        </Box>
      )}
      {isLoading && !walletTask?.isClaimed && (
        <AppIcon name="icon/clock" width={32} height={32} />
      )}
      {walletTask?.isClaimed && !isLoading && (
        <AppIcon name="icon/tick-circle" width={32} height={32} />
      )}
    </AppCardDescriptions>
  );
};
