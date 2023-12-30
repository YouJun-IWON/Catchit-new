import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import Hero from './components/Hero';
import Perks from './components/Perks';

export default function Home() {
  return (
    <>
    <section>

      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>
    </section>

    <section>
      
    </section>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <Perks />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
