import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import UgHero from './_components/UgHero';
import Questions from './_components/Questions';

const page = () => {
  return (
    <>
      <section className='py-20 bg-gray-100'>
        <MaxWidthWrapper>
          <UgHero />
        </MaxWidthWrapper>
      </section>

      <section className='py-10 sm:py-28 bg-gray-50'>
        <MaxWidthWrapper>
          <Questions />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
