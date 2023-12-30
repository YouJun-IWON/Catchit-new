import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='md:hidden'>
        <Image
          src='/Catchit.png'
          width={150}
          height={100}
          alt='logo image'
          className='translate-y-1'
        />
      </div>

      <div className='max-md:hidden'>
        <Image
          src='/Catchit.png'
          width={200}
          height={100}
          alt='logo image'
          className='translate-y-1'
        />
      </div>
    </>
  );
};

export default Logo;
