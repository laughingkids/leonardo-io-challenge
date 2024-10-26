import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { Media } from '@/generated';
import Image from 'next/image';

export const ItemModal = ({ media }: { media?: Partial<Media> | null }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  if (!media) {
    return null;
  }
  return (
    <>
      <Button onClick={onOpen}>
        {media?.title?.english || media?.title?.romaji}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {media?.title?.english || media?.title?.romaji}
          </ModalHeader>
          <ModalBody>
            <Image
              width={100}
              height={500}
              src={media?.coverImage?.medium || ''}
              alt={media?.title?.english || media?.title?.romaji || ''}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
