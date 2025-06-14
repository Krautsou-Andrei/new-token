import { AWARDS_TASKS } from '@/shared/consts/awards-tasks';

export type AwardsCategory =
  | typeof AWARDS_TASKS.BYBIT
  | typeof AWARDS_TASKS.WALLET
  | typeof AWARDS_TASKS.CHECKIN
  | typeof AWARDS_TASKS.WELCOME_BONUS
  | typeof AWARDS_TASKS.SHARE_IN_STORIES
  | typeof AWARDS_TASKS.ACCOUNT_BIO
  | typeof AWARDS_TASKS.WEB_URL
  | typeof AWARDS_TASKS.OPEN_X
  | typeof AWARDS_TASKS.OPEN_TG
  | typeof AWARDS_TASKS.OPEN_YOUTUBE
  | typeof AWARDS_TASKS.OPEN_TIKTOK
  | typeof AWARDS_TASKS.OPEN_REDDIT
  | typeof AWARDS_TASKS.OPEN_DISCORD
  | typeof AWARDS_TASKS.OPEN_PITCHDEK
  | typeof AWARDS_TASKS.OPEN_WHITEPAPER
  | typeof AWARDS_TASKS.WATCH_START_VIDEO
  | typeof AWARDS_TASKS.WATCH_INSTRUCTION;
