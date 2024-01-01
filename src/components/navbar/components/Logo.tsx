import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link href='/' className='md:hidden'>
        <Image
          src='/Catchit.png'
          width={150}
          height={100}
          alt='logo image'
          className='translate-y-1'
        />
      </Link>

      <Link href='/' className='max-md:hidden'>
        <Image
          src='/Catchit.png'
          width={200}
          height={100}
          alt='logo image'
          className='translate-y-1'
        />
      </Link>
    </>
  );
};

export default Logo;
