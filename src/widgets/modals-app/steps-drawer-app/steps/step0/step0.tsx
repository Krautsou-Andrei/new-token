import { t } from 'i18next';

import { useStep0 } from './hooks/useStep0';

import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';

// import { LanguageSwitc2hApp } from '@/widgets/language-switch2-app';

import { LOCAL_TEXT } from '@/shared/consts/local-text';
import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppSpiner } from '@/shared/ui/app-spiner';
import { FileUploadApp } from '@/shared/ui/file-upload-app/file-upload-app';
import { AppExtraSmallText } from '@/shared/ui/typography/app-extra-small-text';
import { AppSmallText } from '@/shared/ui/typography/app-small-text';
import { AppText } from '@/shared/ui/typography/app-text';

import { OPTIONS, VALUES } from './const';

type Step0Props = {
  nextStep: () => void;
};

export const Step0 = ({ nextStep }: Step0Props) => {
  const { state, functions } = useStep0();

  return (
    <AppLayoutBound>
      {state.isLoading && (
        <>
          <AppSpiner />
          <Flex
            align={'center'}
            justifyContent={'center'}
            position={'fixed'}
            w={'full'}
            h={'full'}
            top={10}
            left={0}
            zIndex={10}
          >
            <AppText color={'white'}>{state.statusVideo}</AppText>
          </Flex>
        </>
      )}
      <Box mb={14}>
        <Text textStyle={'text_md_600'} mb={6}>
          {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_ONE.TITLE)}
        </Text>
        {!state.file?.name && (
          <>
            <AppExtraSmallText mb={3}>
              {t(
                LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_ONE.SET_LINK_TIK_TOK
              )}
            </AppExtraSmallText>
            <Input
              mb={state.isIncorrectVideoUrl ? 4 : 1}
              placeholder={t(LOCAL_TEXT.INPUTS.PLACHOLDER)}
              value={state.videoUrl}
              onChange={(e) =>
                functions.handleUpdateVideoUrl(
                  e.target.value,
                  functions.setVideoUrl,
                  functions.setIsIncorrectVideoUrl
                )
              }
            />
            {!state.isIncorrectVideoUrl && state.videoUrl.length > 0 && (
              <AppExtraSmallText
                textColor={'text.error'}
                mb={4}
                fontSize={'14px'}
              >
                {t(
                  LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_ONE.LINK_TIK_TOK
                )}
              </AppExtraSmallText>
            )}
          </>
        )}
        {!state.videoUrl && !state.file?.name && (
          <AppExtraSmallText
            mb={4}
            textColor={'text.descriptions'}
            textAlign={'center'}
          >
            {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_ONE.OR)}
          </AppExtraSmallText>
        )}
        {!state.videoUrl && (
          <>
            {state.file?.name ? (
              <Input
                mb={4}
                readOnly
                bgColor={'background.primary'}
                outline={'none'}
                border={'none'}
                height={11}
                value={state.file.name} // Убрали лишний '?'
              />
            ) : (
              <FileUploadApp
                marginBottom={'12px'}
                handleFileChange={functions.handleFileChange}
              />
            )}

            <AppExtraSmallText
              mb={4}
              textColor={'text.third'}
              textAlign={'center'}
            >
              {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_ONE.VIDEO_SIZE)}
            </AppExtraSmallText>
          </>
        )}
        {(state.videoUrl || state.file?.name) && (
          <Button variant={'outline'} onClick={functions.handleButtonReset}>
            {t(LOCAL_TEXT.BUTTON_CANCEL)}
          </Button>
        )}
      </Box>

      <Box mb={6}>
        <Text textStyle={'text_md_600'} mb={6}>
          {t(LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_TWO.TITLE)}
        </Text>
        <Flex gap={6} mb={6}>
          <Box
            flex={'50%'}
            bgColor={'background.primary'}
            p={4}
            position={'relative'}
            borderRadius={'xxl'}
          >
            <Box
              position={'absolute'}
              top={state.selectedOption === VALUES.TOP ? '16px' : 'auto'}
              bottom={
                state.selectedOption === VALUES.BOTTOM
                  ? '30%'
                  : state.selectedOption === VALUES.CUSTOM
                    ? `${state.percent}%`
                    : 'auto'
              }
              left={'50%'}
              width={'calc(100% - 34px)'}
              height={8}
              bgColor={'background.fourth'}
              borderRadius={'6px'}
              transform={'translateX(-50%)'}
            />

            <Box
              position={'absolute'}
              bottom={'15%'}
              left={4}
              width={'18%'}
              height={'10%'}
              bgColor={'background.third'}
              borderRadius={'6px'}
            />

            <Box
              position={'absolute'}
              bottom={'20%'}
              left={'30%'}
              borderRadius={'6px'}
              width={'50%'}
              height={'5%'}
              bgColor={'background.third'}
            />

            <Box
              position={'absolute'}
              bottom={'8%'}
              left={4}
              borderRadius={'6px'}
              width={'calc(100% - 34px)'}
              height={'5%'}
              bgColor={'background.third'}
            />
          </Box>
          <Box flex={'50%'}>
            <AppSmallText mb={3}>
              {t(
                LOCAL_TEXT.INCOME_PAGE.VIDEO_POSITIONS.STEP_TWO.POSITION_PLASHKA
              )}
            </AppSmallText>
            <RadioGroup
              variant={'primary'}
              onChange={(value) => {
                functions.updateSelectedOption(value);
              }}
              defaultValue={state.selectedOption}
              display={'flex'}
              flexDirection={'column'}
              gap={3}
              mb={3}
            >
              {OPTIONS.map((item) => (
                <Radio key={item.value} value={item.value}>
                  {t(item.title)}
                </Radio>
              ))}
            </RadioGroup>

            <Flex
              w={'fit-content'}
              bgColor={'background.primary'}
              padding={{ base: '6px 8px', sm: '6px 12px' }}
              borderRadius={'12px'}
              gap={{ base: 2, sm: 3 }}
              mb={8}
            >
              <Flex alignItems={'center'} gap={'1px'}>
                <Input
                  w={5}
                  variant="unstyled"
                  type="number"
                  inputMode="numeric"
                  value={
                    state.selectedOption === VALUES.CUSTOM ? state.percent : '0'
                  }
                  onChange={(e) => functions.updatePercent(+e.target.value)}
                  disabled={state.selectedOption !== VALUES.CUSTOM}
                  textAlign="right"
                />
                <Text color="text.descriptions">%</Text>
              </Flex>

              <Flex
                bgColor={'background.third'}
                borderRadius={'8px'}
                height={8}
              >
                <Button
                  flex={'1'}
                  variant={'unstyled'}
                  height={'auto'}
                  width={'auto'}
                  disabled={state.selectedOption !== VALUES.CUSTOM}
                  onClick={() => functions.updatePercent(+state.percent - 1)}
                >
                  -
                </Button>
                <Button
                  flex={'1'}
                  variant={'unstyled'}
                  height={'auto'}
                  width={'auto'}
                  disabled={state.selectedOption !== VALUES.CUSTOM}
                  onClick={() => functions.updatePercent(+state.percent + 1)}
                >
                  +
                </Button>
              </Flex>
            </Flex>
            {/* <AppSmallText marginBottom={'12px'}>Язык плашки</AppSmallText> */}
            {/* <LanguageSwitc2hApp
              handleSelectOut={functions.setSelectedLanguage}
            /> */}
          </Box>
        </Flex>
        <Button
          variant="primary"
          size={'sm'}
          disabled={!state.file?.name && !state.isIncorrectVideoUrl}
          onClick={async () => {
            functions.setIsloading(true);
            try {
              if (state.file?.name) {
                await functions.handleUploadVideoFile();
              }
              if (state.videoUrl) {
                await functions.handleUploadVideoUrl();
              }
              nextStep();
            } catch (error) {
              console.error('error', error);
            }

            functions.setIsloading(false);
          }}
        >
          {t(LOCAL_TEXT.BUTTON_MORE)}
        </Button>
      </Box>
    </AppLayoutBound>
  );
};
