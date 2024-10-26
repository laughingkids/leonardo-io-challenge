import { ReactNode } from 'react';

export interface UserDetail {
  name?: string;
  title?: JobTitle;
}

export interface UserDetailContext extends UserDetail {
  userDetail?: UserDetail;
  isLoginModalOpen: boolean;
  setUserDetail: (userDetail: UserDetail) => void;
  setIsLoginModalOpen: (isLoginModalOpen: boolean) => void;
}

export enum JobTitle {
  Manager = 'Manager',
  Admin = 'Admin',
  Developer = 'Developer',
  Designer = 'Designer',
  Devops = 'Devops',
}

export interface UserDetailProviderProps {
  children: ReactNode;
}
