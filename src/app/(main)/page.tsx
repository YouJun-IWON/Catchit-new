import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import Hero from './components/Hero';
import Perks from './components/Perks';
import Call from './components/Call';

export default function Home() {
  return (
    <>
      <section className=' bg-gray-50'>
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className='text-center py-14 text-2xl sm:text-5xl font-semibold leading-loose'>
          <p className='leading-tight'>
            우리 매장, <br />
            어디에 광고해야 사람들이 올까?
          </p>
        </MaxWidthWrapper>
      </section>

      <section className='  bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <Perks />
        </MaxWidthWrapper>
      </section>

      <section className='  bg-gray-100'>
        <MaxWidthWrapper className='py-20'>
          <Call />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
