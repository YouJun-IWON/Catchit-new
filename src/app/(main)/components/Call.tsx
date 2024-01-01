'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/use-modal-store';
import { MapPinned, Phone } from 'lucide-react';

const Call = () => {
  const { onOpen } = useModal();

  return (
    <div className='max-sm:flex-col sm:flex items-center justify-center sm:justify-between max-sm:text-center'>
      <div className='text-2xl sm:text-5xl font-bold mb-10 sm:mb-0'>
        언제든지 편하게 문의해보세요
      </div>

      <div className='max-sm:flex-col sm:flex space-y-10 sm:space-y-0 sm:space-x-20'>
        <div className='flex flex-col items-center'>
          <div className='p-6 bg-white rounded-full'>
            <Icons.kakao className='text-black h-12 w-12' />
          </div>
          <span className='mt-2 text-md font-semibold'>카카오톡</span>
        </div>

        <div className='flex flex-col items-center'>
          <a href='tel:010-9260-9452' className='p-6 bg-white rounded-full'>
            <Phone className='fill-black h-12 w-12' />
          </a>
          <span className='mt-2 text-md font-semibold'>전화</span>
        </div>

        <div className='flex flex-col items-center'>
          <button
            onClick={() => onOpen('register')}
            className='p-6 bg-white rounded-full'
          >
            <MapPinned className='h-12 w-12 ' />
          </button>

          <span className='mt-2 text-md font-semibold'>입점 문의</span>
        </div>
      </div>
    </div>
  );
};

export default Call;
