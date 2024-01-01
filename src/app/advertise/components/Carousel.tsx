'use client';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Ready = () => {
  return (
    <div className='flex flex-col items-center gap-6 justify-center'>
      <div className='text-center font-semibold'>
        <p className='text-4xl'>
          확실한 매출을 만드는
          <br />
          상품이 준비되어 있어요
        </p>
        <p className='text-gray-500 mt-4 text-xl'>
          광고 제안서를 통해 자세한 광고 상품을 확인해볼 수 있습니다.
        </p>
      </div>

      <Button className='text-2xl font-normal px-12 py-6'>
        광고 이용 제안서
      </Button>

      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Ready;
