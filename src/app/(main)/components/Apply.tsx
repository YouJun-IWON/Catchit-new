import RegisterButton from '@/components/Register-Button';

const Apply = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-14'>
      <div className='text-center  text-3xl sm:text-5xl font-semibold leading-loose'>
        지금 바로 신청해보세요
      </div>

      <div className='flex max-sm:flex-col max-sm:gap-4 justify-center sm:space-x-14 text-center'>
        <div className='bg-white rounded-full text-2xl px-8 py-4 h-fit '>
          광고신청
        </div>
        <span className='self-center max-sm:rotate-90 text-4xl'>→</span>
        <div className='bg-white rounded-full text-2xl px-8 py-4 h-fit '>
          담당자컨펌
        </div>
        <span className='self-center max-sm:rotate-90 text-4xl'>→</span>
        <div className='bg-white rounded-full text-2xl px-8 py-4 h-fit '>
          광고집행
        </div>
      </div>

      <RegisterButton title='1분만에 신청하기' />
    </div>
  );
};

export default Apply;
