import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useSheet } from '@/hooks/use-sheet-store';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

const NaviMobile = () => {
  const { isOpen, onClose, type } = useSheet();
  const isSheetOpen = isOpen && type === 'navigation';

  return (
    <Sheet open={isSheetOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
              <Link href='#'>Sign in</Link>
              <Link href='/' onClick={() => onClose()}>
                Home
              </Link>
              <Link href='/advertise' onClick={() => onClose()}>
                매장 광고
              </Link>
              <Link href='/useGuide' onClick={() => onClose()}>
                이용가이드
              </Link>
              <Link href='/customerCenter' onClick={() => onClose()}>
                고객센터
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NaviMobile;
