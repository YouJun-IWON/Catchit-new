import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

const ActionButton = () => {
  return (
    <div>
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <AlignJustify className='mt-2' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
                  <Link href='#'>Sign in</Link>
                  <Link href='/'>Home</Link>
                  <Link href='#'>매장 광고</Link>
                  <Link href='#'>이용가이드</Link>
                  <Link href='#'>고객센터</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className='hidden md:flex md:space-x-4'>
        <Button className='text-md'>로그인</Button>
      </div>
    </div>
  );
};

export default ActionButton;
