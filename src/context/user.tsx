'use client';
import { type UserDetailContext, type UserDetailProviderProps } from '@/models';
import { createContext, useCallback, useContext, useState } from 'react';

const UserDetailContext = createContext<UserDetailContext | undefined>(
  undefined
);

const UserDetailProvider: React.FC<UserDetailProviderProps> = ({
  children,
}) => {
  const [userDetail, setUserDetail] =
    useState<UserDetailContext['userDetail']>();
  const [isOpen, setIsOpen] = useState<UserDetailContext['isLoginModalOpen']>(
    !userDetail
  );

  const setIsLoginModalOpen = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen);
  }, []);

  return (
    <UserDetailContext.Provider
      value={{
        isLoginModalOpen: isOpen,
        setIsLoginModalOpen,
        userDetail,
        setUserDetail,
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};

const useUserDetail = () => {
  const context = useContext(UserDetailContext);
  if (!context) {
    throw new Error('useUserDetail must be used within a UserDetailProvider');
  }
  return context;
};

export { UserDetailProvider, useUserDetail };
