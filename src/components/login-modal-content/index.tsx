import { UserDetail, JobTitle } from '@/models';
import {
  Button,
  HStack,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
} from '@chakra-ui/react';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { LoginModalContentProps } from './types';
import { useUserDetail } from '@/context';

export function LoginModalContent({
  onConfirm,
  onCancel,
}: LoginModalContentProps) {
  const { userDetail } = useUserDetail();
  const [name, setName] = useState<UserDetail['name']>(userDetail?.name || '');
  const [title, setTitle] = useState<UserDetail['title']>(
    userDetail?.title || JobTitle.Admin
  );

  const onNameChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const onTitleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      setTitle(event.target.value as JobTitle);
    },
    [setTitle]
  );

  return (
    <ModalContent>
      <ModalHeader>Please login</ModalHeader>
      <ModalBody>
        <Stack>
          <HStack>
            <label htmlFor='title'>Title</label>
            <select
              defaultValue={title}
              name='title'
              id='title'
              onChange={onTitleChange}
              tabIndex={1}
            >
              {Object.values(JobTitle).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </HStack>
          <HStack>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              id='name'
              type='text'
              value={name}
              onChange={onNameChange}
              tabIndex={2}
            />
          </HStack>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onConfirm({ name, title })}>
          {name || title ? `Update` : 'Login'}
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
