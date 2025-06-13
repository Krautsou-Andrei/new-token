import { z } from 'zod';

import { ROLE } from '@/shared/consts/user-roles';

export const UserInfoSchema = z.object({
  id: z.number(),
  userId: z.number(),
  name: z.string().nullable(),
  username: z.string().nullable(),
  instagramAccount: z.string().nullable(),
  tiktokAccount: z.string().nullable(),
  youtubeAccount: z.string().nullable(),
  email: z.string().nullable(),
  tonWalletAddress: z.string(),
  bybitWalletAddress: z.string().nullable(),
  avatarUrl: z.string().nullable(),
});

export const UserSchema = z.object({
  id: z.string().uuid(),
  telegramId: z.string(),
  username: z.string(),
  role: z.nativeEnum(ROLE),
  image: z.string().optional(),
  isBaned: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  inviterRefCode: z.string().optional(),
  refCode: z.string().optional(),
  balance: z.string().optional(),
  email: z.string().email().optional().nullable(),
  name: z.string().optional().nullable(),
  xp: z.number().int().nonnegative(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  userInfo: UserInfoSchema,
});

export const AuthProviderDataSchema = z.object({
  provider: z.enum(['google', 'apple', 'telegram']),
  providerId: z.string(),
});

export const UserWithAuthProvidersSchema = UserSchema.extend({
  authProviders: z.array(AuthProviderDataSchema).optional(),
});

export const BackendAuthResponseSchema = z.object({
  token: z.string(),
  user: UserSchema,
  xpGranted: z.number().int().optional(),
});

export const GoogleLoginPayloadSchema = z.object({
  token: z.string(),
});

export const AppleLoginPayloadSchema = z.object({
  code: z.string(),
  id_token: z.string(),
  user: z
    .object({
      name: z
        .object({
          firstName: z.string().optional(),
          lastName: z.string().optional(),
        })
        .optional(),
      email: z.string().email().optional(),
    })
    .optional()
    .nullable(),
  state: z.string().optional(),
});

export const TelegramLoginPayloadSchema = z.object({
  id: z.number().int(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  username: z.string().optional(),
  photo_url: z.string().url().optional(),
  auth_date: z.number().int(),
  hash: z.string(),
});

export const SolanaLoginPayloadSchema = z.object({
  publicKey: z.string(),
  signature: z.string(),
  message: z.string(),
});

export const CurrentUserResponseSchema = z.object({
  user: UserSchema,
});
