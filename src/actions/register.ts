'use server';

import * as z from 'zod';

import { registerSchema } from '@/schemas';

export const register = async(values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if(!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  return { success: "이메일 전송 완료"};
};
