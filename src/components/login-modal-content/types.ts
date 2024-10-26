import { UserDetail } from '@/models';
import { UseDisclosureProps } from '@chakra-ui/react';

export interface LoginModalContentProps {
  onConfirm: (userDetail: UserDetail) => void;
  onCancel: UseDisclosureProps['onClose'];
}
