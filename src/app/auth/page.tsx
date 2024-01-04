import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/app/auth/_components/user-auth-form';

export const metadata: Metadata = {
  title: '로그인',
};

// TODO: layout 수정하기
// 일반 로그인 => 회원가입 버튼 축소
// 간편 로그인 => 원형으로 가로 줄

export default function AuthenticationPage() {
  return (
    <>
      <div className=''>
        {/* <Link
          href='/examples/authentication'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Login
        </Link> */}
       

        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          {/* <div className='flex justify-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                도약을 시작하세요.
              </h1>
            
            </div> */}
          <UserAuthForm />
         
        </div>
      </div>
    </>
  );
}
