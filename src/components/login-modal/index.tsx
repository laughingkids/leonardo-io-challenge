import { useUserDetail } from '@/context';
import { navigate } from '@/actions';
import { UserDetail } from '@/models';
import { Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useCallback } from 'react';
import { LoginModalContent } from '../login-modal-content';
import { LoginModalContentProps } from '../login-modal-content/types';
import { LoginModalProps } from './types';

export const LoginModal = ({ isOpen = false }: LoginModalProps) => {
  const { setIsLoginModalOpen, setUserDetail } = useUserDetail();
  const { onClose } = useDisclosure();

  const loginConfirmCallback: LoginModalContentProps['onConfirm'] = useCallback(
    (userDetail: UserDetail) => {
      setUserDetail(userDetail);
      setIsLoginModalOpen(false);
      navigate('/user/p/1');
    },
    [setIsLoginModalOpen, setUserDetail]
  );

  const onModalClose = () => {
    setIsLoginModalOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <LoginModalContent
        onConfirm={loginConfirmCallback}
        onCancel={onModalClose}
      />
    </Modal>
  );
};
