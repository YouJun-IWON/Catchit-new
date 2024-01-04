'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { useSheet } from '@/hooks/use-sheet-store';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

const ActionButton = () => {
  const { onOpen } = useSheet();
  return (
    <div>
      <div className='md:hidden'>
        <AlignJustify onClick={() => onOpen('navigation')} />
      </div>

      <div className='hidden md:flex md:space-x-4'>
        <Link href='/auth' className={cn(buttonVariants())}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default ActionButton;
