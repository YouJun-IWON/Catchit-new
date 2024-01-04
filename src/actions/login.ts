'use server';

import * as z from 'zod';

import { LoginSchema } from '@/schemas';

export const login = async(values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if(!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  return { success: "이메일 전송 완료"};
};
