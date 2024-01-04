import { wants } from '@/constants/lending';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Wants = () => {
  return (
    <div>
      <div className='text-3xl text-center sm:text-left sm:text-5xl py-6 font-semibold'>
        <p className='leading-tight text-pretty'>
          광고는 하고 싶은데 <br />
          가격이 너무 비싸서 부담된다면
        </p>
      </div>
      <div className='grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6'>
        {wants.map((want, index) => (
          <Card
            key={index}
            className='text-pretty sm:p-4 relative pb-0 bg-gray-100'
          >
            <CardHeader className='gap-4'>
              <CardTitle className='leading-8 sm:text-3xl'>
                {want.name1}
                <br />
                {want.name2}
              </CardTitle>
              <CardDescription className='text-lg leading-tight'>
                {want.description1}
                <br />
                {want.description2}
              </CardDescription>
            </CardHeader>
            <CardContent className='absolute right-0 max-sm:top-4 sm:bottom-0 '>
              <Image
                src={want.image}
                width={100}
                height={50}
                alt='want image'
                className='hidden sm:flex'
              />
              <Image
                src={want.image}
                width={70}
                height={50}
                alt='want image'
                className=' sm:hidden'
              />
            </CardContent>
            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Wants;
