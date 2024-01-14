import NextAuth, { type DefaultSession } from 'next-auth';
import { User_user_type } from '@prisma/client';

export type ExtendedUser = DefaultSession['user'] & {
  role: User_user_type;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
