import { points } from '@/constants/advertise';
import Image from 'next/image';

const Point = () => {
  return (
    <div className='flex flex-col justify-between  sm:px-28 max-sm:text-center  gap-32 items-center'>
      {points.map((point, index) => (
        <div
          key={index}
          className='flex max-sm:flex-col max-sm:gap-10 justify-between w-full items-center'
        >
          <div className='text-3xl sm:text-4xl font-semibold leading-tight'>
            <p>
              {point.name1}
              <br />
              {point.name2}
            </p>
          </div>

          <div className='flex items-center justify-center w-[340px] h-[340px] rounded-xl bg-gray-300'>
            <Image
              src={point.image}
              width={300}
              height={300}
              alt='points image'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Point;
