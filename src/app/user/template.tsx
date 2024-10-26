'use client';

import UserCard from '@/components/user-card';
import { PropsWithChildren } from 'react';

export default function UserPageTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <UserCard />
      {children}
    </>
  );
}
