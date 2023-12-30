import RegisterButton from '@/components/Register-Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='py-32 mx-auto text-center flex flex-col items-center max-w-xs  sm:max-w-3xl gap-2'>
      <Image src='/CatchitLogo.png' width={100} height={100} alt='main logo' />
      <h1 className='text-4xl font-bold text-gray-900 sm:text-6xl'>
        10만 원으로 <br />
        5,000명에게 매장 알리기
      </h1>
      <RegisterButton className='mt-10' />
    </div>
  );
};

export default Hero;
