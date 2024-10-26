'use client';

import { LoginModal } from '@/components';
import { useUserDetail } from '@/context';

export default function Template({ children }: { children: React.ReactNode }) {
  const { isLoginModalOpen } = useUserDetail();
  return (
    <>
      {children}
      <LoginModal isOpen={isLoginModalOpen} />
    </>
  );
}
