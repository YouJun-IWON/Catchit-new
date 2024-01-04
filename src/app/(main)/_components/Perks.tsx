import { perks } from '@/constants/lending';

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

const Perks = () => {
  return (
    <div>
      <div className='text-3xl text-center sm:text-left sm:text-5xl py-6 font-semibold'>
        <p className='leading-tight'>
          캐칫만 가능한 지도 광고로 <br />
          사장님들을 도울게요!
        </p>
      </div>
      <div className='grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6'>
        {perks.map((perk, index) => (
          <Card key={index} className='p-4 pb-0'>
            <CardHeader className='gap-2 '>
              <CardTitle className='leading-8 sm:text-3xl'>
                {perk.name1}
                <br />
                {perk.name2}
              </CardTitle>
              <CardDescription className='text-lg leading-tight'>
                {perk.description1}
                <br />
                {perk.description2}
                <br />
                {perk.description3 === '' ? (
                  <span className='opacity-0'>qwer</span>
                ) : (
                  perk.description3
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className='flex items-center justify-center pb-0'>
              <Image
                src={perk.image}
                width={400}
                height={100}
                alt='perk image'
              />
            </CardContent>
            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>
        ))}
      </div>
      <div className='py-14 flex justify-center'>
        <Link
          href='/advertise'
          className={cn(
            buttonVariants(),
            'px-5 sm:px-10 sm:py-7 text-xl sm:text-3xl items-center '
          )}
        >
          매장 광고 더 알아보기
        </Link>
      </div>
    </div>
  );
};

export default Perks;
