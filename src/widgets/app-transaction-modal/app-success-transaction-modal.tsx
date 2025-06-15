import { SLIDES } from '@/pages/airdrop-page/form-app/const';

import { memo, useEffect, useState } from 'react';

import { Box, Flex, Input } from '@chakra-ui/react';

import { useCreatePayment } from '@/shared/api/hooks/payment/use-create-payment';
import { useBuyStore } from '@/shared/lib/persistance';
import { useModalStore } from '@/shared/lib/persistance/modal.store';
import { amountValidateNumber } from '@/shared/lib/utils/validate/amount-validate-number';
import { AppButtonBorderGradient } from '@/shared/ui/app-button-border-gradient';
import { AppModal } from '@/shared/ui/app-modal';
import { AppSpiner } from '@/shared/ui/app-spiner';

interface AppTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
}

export const AppTransactionModal = memo(
  ({ isOpen, onClose }: AppTransactionProps) => {
    const { link } = useBuyStore();
    const { currency, setCurrency } = useModalStore();

    const [value, setValue] = useState('');
    const {
      mutate: cretePayment,
      isSuccess: isSuccessPayment,
      isPending: isPendingPayment,
    } = useCreatePayment();

    useEffect(() => {
      if (isSuccessPayment) {
        window.open(link, '_blank');
      }
    }, [isSuccessPayment, link]);

    return (
      <AppModal isOpen={isOpen} onClose={onClose} title={'Пополнить'}>
        {isPendingPayment && <AppSpiner />}
        <Box
          mb={4}
          textAlign={'center'}
          color={'text.primary'}
          fontWeight={400}
        >
          <Input
            fontFamily={'tektur'}
            value={value}
            placeholder="Введите сумму"
            onKeyDown={(event) =>
              amountValidateNumber(event as unknown as KeyboardEvent)
            }
            onChange={(event) => setValue(event.target.value)}
          />
        </Box>
        <Flex w={'full'} justifyContent={'center'} mb={4}>
          <AppButtonBorderGradient
            px={'12px'}
            py={'10px'}
            fontSize={'32px'}
            onClick={() => {
              if (value && currency) {
                cretePayment({
                  params: {
                    tokenAmount: +value,
                    currency: currency.toUpperCase(),
                  },
                });
                setCurrency(undefined);
              }
            }}
          >
            Пополнить
          </AppButtonBorderGradient>
        </Flex>
      </AppModal>
    );
  }
);
