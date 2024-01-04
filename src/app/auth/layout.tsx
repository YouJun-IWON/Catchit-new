import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container relative flex-col items-center justify-center lg:grid h-[600px] sm:h-[800px] lg:max-w-none lg:grid-cols-2 px-0 '>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium gap-2'>
          <Image src='/CatchitLogo.png' width={50} height={50} alt='logo' />
          <p className='text-catchitBlue font-semibold text-xl'>
            Catchit Bussiness
          </p>
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;최고의 가성비 홍보를 지향합니다.&rdquo;
            </p>
            <footer className='text-sm'>Team Agenda</footer>
          </blockquote>
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-center bg-gray-50 h-full px-6'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
