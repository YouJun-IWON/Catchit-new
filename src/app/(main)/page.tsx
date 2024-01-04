import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import Hero from './_components/Hero';
import Perks from './_components/Perks';
import Call from './_components/Call';
import Wants from './_components/Want';
import Apply from './_components/Apply';

export default function Home() {
  return (
    <>
      <section className='py-10 sm:py-20 bg-gray-50'>
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

      <section className='bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <Perks />
        </MaxWidthWrapper>
      </section>

      <section className='bg-gray-100'>
        <MaxWidthWrapper className='py-20'>
          <Call />
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className='py-20'>
          <Wants />
        </MaxWidthWrapper>
      </section>

      <section className='bg-gray-200'>
        <MaxWidthWrapper className='py-20'>
          <Apply />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
