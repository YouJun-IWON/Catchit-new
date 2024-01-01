'use client';

import { useEffect, useState } from 'react';
import NaviMobile from '../sheets/navi-mobile';

export const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NaviMobile />
    </>
  );
};
