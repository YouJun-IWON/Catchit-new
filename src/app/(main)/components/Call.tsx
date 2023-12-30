import { Icons } from '@/components/icons';
import { MapPinned, Phone } from 'lucide-react';

const Call = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='text-5xl font-bold'>언제든지 편하게 문의해보세요</div>

      <div className='flex space-x-20'>
        <div className='flex flex-col items-center'>
          <div className='p-6 bg-white rounded-full'>
            <Icons.kakao className='text-black h-12 w-12' />
          </div>
          <span className='mt-2 text-md font-semibold'>카카오톡</span>
        </div>

        <div className='flex flex-col items-center'>
          <a href='tel-av:' className='p-6 bg-white rounded-full'>
            <Phone className='fill-black h-12 w-12' />
          </a>
          <span className='mt-2 text-md font-semibold'>전화</span>
        </div>

        <div className='flex flex-col items-center'>
          <div className='p-6 bg-white rounded-full'>
            <MapPinned className='h-12 w-12 ' />
          </div>
          <span className='mt-2 text-md font-semibold'>입점 문의</span>
        </div>
      </div>
    </div>
  );
};

export default Call;
