import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative flex flex-col items-center justify-center  h-[600px] sm:h-[800px] lg:max-w-none px-0 '>
      {children}
    </div>
  );
};

export default AuthLayout;
