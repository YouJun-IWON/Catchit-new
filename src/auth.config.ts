import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { LoginSchema } from './schemas';
import { getUserByEmail } from '@/data/user';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials.fields);
        const validatedFields = LoginSchema.safeParse(credentials);

        console.log(validatedFields);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          console.log('passwordMatch', passwordMatch);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
