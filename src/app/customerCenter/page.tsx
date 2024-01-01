import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CcHero from './components/CcHero';

const page = () => {
  return (
    <>
      <section className='py-20 sm:py-32 bg-gray-100'>
        <MaxWidthWrapper>
          <CcHero />
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className='py-28'></MaxWidthWrapper>
      </section>

      <section className='  bg-gray-100'>
        <MaxWidthWrapper className='py-20'></MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
