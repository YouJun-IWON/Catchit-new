'use client';

import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/use-modal-store';
import { cn } from '@/lib/utils';

const RegisterButton = ({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) => {
  const { onOpen } = useModal();

  return (
    <Button
      className={cn(
        className,
        'px-12 py-8 text-black text-lg sm:text-2xl hover:text-white bg-zinc-300'
      )}
      onClick={() => onOpen('register')}
    >
      {title}
    </Button>
  );
};

export default RegisterButton;
