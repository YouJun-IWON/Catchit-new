import RegisterButton from '@/components/Register-Button';

const CcHero = () => {
  return (
    <div className=' flex max-sm:flex-col max-sm:text-center justify-between px-10 sm:px-32 items-center'>
      <div className='flex flex-col justify-between'>
        <div className=' font-semibold'>
          <p className='text-3xl sm:text-5xl leading-tight'>
            캐칫 첫 광고!
            <br />
            온라인으로 신청하고
            <br />
            혜택 받아가요
          </p>

          <p className='text-xl sm:text-3xl font-bold mt-6'>
            광고비 1개월 무료 지원
          </p>
        </div>
      </div>

      <RegisterButton
        className='w-fit max-sm:mt-10  sm:px-6'
        title='1개월 무료로 신청하기'
      />
    </div>
  );
};

export default CcHero;
