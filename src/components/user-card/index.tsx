import { useUserDetail } from '@/context';
import { Button, Heading, Stack } from '@chakra-ui/react';

const UserCard = () => {
  const { setIsLoginModalOpen, userDetail } = useUserDetail();
  return (
    <Stack>
      <Heading>Welcome {userDetail?.name}</Heading>
      <Button
        onClick={() => {
          setIsLoginModalOpen(true);
        }}
      >
        Update
      </Button>
    </Stack>
  );
};

export default UserCard;
