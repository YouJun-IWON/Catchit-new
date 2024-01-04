import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import AdHero from './_components/AdHero';
import Point from './_components/Point';
import Ready from './_components/Carousel';

const page = () => {
  return (
    <>
      <section className='py-20 sm:py-32 bg-gray-100'>
        <MaxWidthWrapper>
          <AdHero />
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className='py-28'>
          <Point />
        </MaxWidthWrapper>
      </section>

      <section className='  bg-gray-100'>
        <MaxWidthWrapper className='py-20'>
          <Ready />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
