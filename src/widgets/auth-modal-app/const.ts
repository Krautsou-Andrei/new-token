export const HANDLE_AUTH = {
  GOOGLE: 'Google',
  //   APPLIENT: 'Appliet',
  SOLANA: 'SolanaWallet',
  TELEGRAM: 'TelegramBot',
};

export type ButtonsHandle = keyof typeof HANDLE_AUTH;

export type ButtonAuthType = {
  id: number;
  handle: ButtonsHandle;
  textButton: string;
  vatian: string;
};

export const BUTTONS_AUTH: ButtonAuthType[] = [
  // {
  //   id: 1,
  //   textButton: 'Google',
  //   vatian: 'outlineInvert',
  //   handle: HANDLE_AUTH.GOOGLE as ButtonsHandle,
  // },
  //   {
  //     id: 2,
  //     textButton: 'appliet',
  //     vatian: 'outlineInvert',
  //     handle: HANDLE_AUTH.APPLIENT,
  //   },
  // {,
  {
    id: 4,
    textButton: 'telegram bot',
    vatian: 'secondary',
    handle: HANDLE_AUTH.TELEGRAM as ButtonsHandle,
  },
];
