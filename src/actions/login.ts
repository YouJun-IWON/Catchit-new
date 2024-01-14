'use server';

import * as z from 'zod';

import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  const { email, password } = validatedFields.data;

  console.log(email, password);

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: '유효하지 않은 정보입니다.' };
        default:
          return { error: '무엇인가 잘못 되었습니다.' };
      }
    }

    throw error;
  }
};
