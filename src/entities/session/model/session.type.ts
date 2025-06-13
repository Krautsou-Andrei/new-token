import { z } from 'zod';

import {
  AppleLoginPayloadSchema,
  BackendAuthResponseSchema,
  CurrentUserResponseSchema,
  GoogleLoginPayloadSchema,
  SolanaLoginPayloadSchema,
  TelegramLoginPayloadSchema,
  UserInfoSchema,
  UserSchema,
} from './session.schemas';

export type User = z.infer<typeof UserSchema>;
export type UserInfo = z.infer<typeof UserInfoSchema>;
export type BackendAuthResponse = z.infer<typeof BackendAuthResponseSchema>;
export type TelegramLoginPayload = z.infer<typeof TelegramLoginPayloadSchema>;
export type SolanaLoginPayload = z.infer<typeof SolanaLoginPayloadSchema>;
export type GoogleLoginPayload = z.infer<typeof GoogleLoginPayloadSchema>;
export type AppleLoginPayload = z.infer<typeof AppleLoginPayloadSchema>;
export type CurrentUserResponse = z.infer<typeof CurrentUserResponseSchema>;
export {
  AppleLoginPayloadSchema,
  BackendAuthResponseSchema,
  CurrentUserResponseSchema,
  GoogleLoginPayloadSchema,
  SolanaLoginPayloadSchema,
  TelegramLoginPayloadSchema,
  UserInfoSchema,
  UserSchema,
};
