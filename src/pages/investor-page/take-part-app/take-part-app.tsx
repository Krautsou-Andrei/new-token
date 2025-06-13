import { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAnimation } from './hooks/useAnimation';

import { Box, type BoxProps, Button, Input, Link } from '@chakra-ui/react';

import { useCreatePayment } from '@/shared/api/hooks/payment/use-create-payment';
import { DEFAULT } from '@/shared/consts';
import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { useAuthStore, useBuyStore } from '@/shared/lib/persistance';
import { HighlightText } from '@/shared/lib/utils';
import { AppExtraSmallText } from '@/shared/ui/typography/app-extra-small-text';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

export const TakePartApp = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const { t } = useTranslation();

    const { mutate: cretePayment, isSuccess, isPending } = useCreatePayment();
    const { link } = useBuyStore();
    const { token } = useAuthStore();
    const { openAuthModal } = useAuthStore();

    const [value, setValue] = useState('');
    const [price, setPrice] = useState('0');
    const [error, setError] = useState('');
    const TOKEN_PRICE = 0.04;

    const {
      containerRef,
      titleRef,
      subtitleRef,
      inputTitleRef,
      inputRef,
      inputSubtitleRef,
      getRef,
      btnRef,
      privacyRef,
    } = useAnimation();

    const handlePayment = () => {
      if (!token) {
        openAuthModal();
        return;
      }

      if (Number(price) < DEFAULT.MIN_BUY_TOKEN) {
        setError(
          t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.ERROR, {
            value: DEFAULT.MIN_BUY_TOKEN,
          })
        );
        return;
      }

      cretePayment({ params: { tokenAmount: +price } });
    };

    useEffect(() => {
      if (isSuccess) {
        window.open(link, '_blank');
      }
    }, [isSuccess, link]);

    return (
      <Box
        ref={(el) => {
          containerRef.current = el;
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref && typeof ref === 'object' && 'current' in ref) {
            ref.current = el;
          }
        }}
        {...props}
        p={5}
        borderRadius={'20px'}
        border={'1px solid'}
        borderColor={'background.secondary'}
        bgColor={'background.third'}
      >
        <AppHeading ref={titleRef} mb={3}>
          {HighlightText({
            text: t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.TITLE.VALUE),
            highlight: t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.TITLE.HIGHLIGHT),
          })}
        </AppHeading>
        <AppExtraSmallText
          ref={subtitleRef}
          textAlign={'center'}
          textColor={'text.descriptions'}
          mb={8}
        >
          {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.SUB_TITLE, {
            value: DEFAULT.MIN_BUY_TOKEN,
            valueTwo: DEFAULT.MAX_BUY_TOKEN,
          })}
        </AppExtraSmallText>
        <Box mb={8}>
          <AppText
            ref={inputTitleRef}
            textStyle={'text_md_600'}
            mb={4}
            textAlign={'left'}
          >
            {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.FIELD_USDT)}
          </AppText>
          <Input
            ref={inputRef}
            placeholder={t(
              LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.FIELD_USDT_PLACEHOLDER
            )}
            mb={2}
            value={value}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*\.?\d*$/.test(val)) {
                setValue(val);
                const numericValue = +val;
                if (numericValue >= DEFAULT.MIN_BUY_TOKEN) {
                  setPrice((numericValue / TOKEN_PRICE).toFixed(2));
                  setError('');
                } else {
                  setError(
                    t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.ERROR, {
                      value: DEFAULT.MIN_BUY_TOKEN,
                    })
                  );
                }
              }
            }}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}{' '}
          <AppExtraSmallText
            ref={inputSubtitleRef}
            textColor={'text.descriptions'}
            textAlign={'left'}
          >
            {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.PRICE_TOKEN, {
              value: DEFAULT.TOKEN_PRE_SALE,
            })}{' '}
            = {TOKEN_PRICE}$
          </AppExtraSmallText>
        </Box>
        <Box ref={getRef} mb={8}>
          <AppText textStyle={'text_md_600'} mb={3} textAlign={'left'}>
            {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.FIELD_TOKEN, {
              value: DEFAULT.TOKEN_PRE_SALE,
            })}
          </AppText>
          <AppHeading
            textColor={'text.secondary'}
            fontSize={
              price.length > 10
                ? 'clamp(10px, 3.5vw, 24px)'
                : 'clamp(18px, 5vw, 24px)'
            }
          >
            {value === '' ? '0' : price}
          </AppHeading>
        </Box>
        <Button
          ref={btnRef}
          isLoading={isPending}
          onClick={handlePayment}
          disabled={Boolean(error)}
          mb={3}
        >
          {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.BUTTON)}
        </Button>
        <AppExtraSmallText
          ref={privacyRef}
          textColor={'text.descriptions'}
          textAlign={'center'}
        >
          {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.OFERTS.ONE)}{' '}
          <Link
            href="/privacy-policy"
            textColor={'text.secondary'}
            textDecoration={'underline'}
          >
            {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.OFERTS.TWO)}
          </Link>{' '}
          {t(LOCAL_TEXT.INVESTOR_PAGE.TAKE_PARTS.OFERTS.THREE)}
        </AppExtraSmallText>
      </Box>
    );
  }
);
