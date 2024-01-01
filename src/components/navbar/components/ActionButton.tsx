'use client';
import { Button } from '@/components/ui/button';
import { useSheet } from '@/hooks/use-sheet-store';
import { AlignJustify } from 'lucide-react';

const ActionButton = () => {
  const { onOpen } = useSheet();
  return (
    <div>
      <div className='md:hidden'>
        <AlignJustify onClick={() => onOpen('navigation')} />
      </div>

      <div className='hidden md:flex md:space-x-4'>
        <Button className='text-md'>로그인</Button>
      </div>
    </div>
  );
};

export default ActionButton;
