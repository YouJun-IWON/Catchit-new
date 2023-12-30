'use client';

import { useEffect, useState } from 'react';
import Register from '../modals/register';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Register />
    </>
  );
};
