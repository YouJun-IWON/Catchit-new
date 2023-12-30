'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className='hidden md:flex gap-6 lg:gap-20'>
      <Link href='/' className={cn(pathname === '/' && 'font-bold')}>
        Home
      </Link>
      <Link
        href='/advertise'
        className={cn(pathname === '/advertise' && 'font-bold')}
      >
        매장광고
      </Link>
      <Link
        href='/customerCenter'
        className={cn(pathname === '/customerCenter' && 'font-bold')}
      >
        이용가이드
      </Link>
      <Link
        href='/useGuide'
        className={cn(pathname === '/useGuide' && 'font-bold')}
      >
        고객센터
      </Link>
    </div>
  );
};

export default Navigation;
