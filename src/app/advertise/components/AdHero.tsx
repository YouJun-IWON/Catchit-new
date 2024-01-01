import RegisterButton from '@/components/Register-Button';
import Image from 'next/image';
import React from 'react';

const AdHero = () => {
  return (
    <>
      <div className=' hidden sm:flex justify-between px-10 sm:px-32 items-center'>
        <div className='flex flex-col h-[452px] justify-between'>
          <div className=' text-5xl font-bold leading-tight'>
            <p>
              멀리 있는 사람보단
              <br />
              매장 근처 손님에게
            </p>
          </div>

          <RegisterButton
            className='w-fit sm:px-6'
            title='1개월 무료로 신청하기'
          />
        </div>

        <Image
          src='/advertise/advertise-1.png'
          width={300}
          height={300}
          alt='advertise image'
          className='shadow-xl rounded-3xl'
        />
      </div>

      <div className='flex flex-col sm:hidden justify-between px-10 items-center gap-32'>
        <div className='flex flex-col h-[452px] gap-10 justify-between'>
          <div className=' text-4xl font-bold leading-tight'>
            <p>
              멀리 있는 사람보단
              <br />
              매장 근처 손님에게
            </p>
          </div>

          <Image
            src='/advertise/advertise-1.png'
            width={300}
            height={300}
            alt='advertise image'
            className='shadow-xl'
          />
        </div>

        <RegisterButton
          className='w-fit sm:px-6'
          title='1개월 무료로 신청하기'
        />
      </div>
    </>
  );
};

export default AdHero;
