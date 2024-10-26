'use client';

import { navigate } from '@/actions';
import { ItemModal } from '@/components/item-modal';
import { useUserDetail } from '@/context';
import { useGetMediaListQuery } from '@/generated';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useCallback } from 'react';

function UserPage({ params: { page } }: { params: { page: string } }) {
  const { isLoginModalOpen } = useUserDetail();

  const { loading, data } = useGetMediaListQuery({
    variables: {
      page: parseInt(page),
      perPage: 20,
    },
    skip: isLoginModalOpen,
  });

  const goNextPage = useCallback(() => {
    const currentPage = data?.Page?.pageInfo?.currentPage || parseInt(page);
    navigate(`/user/p/${currentPage + 1}`);
  }, [data]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <ul>
        {data?.Page?.media?.map((media) => (
          <>
            <Image
              width={100}
              height={500}
              src={media?.coverImage?.medium || ''}
              alt={media?.title?.english || media?.title?.romaji || ''}
            />
            <ItemModal media={media} />
          </>
        ))}
      </ul>
      <Button
        disabled={!data?.Page?.pageInfo?.hasNextPage}
        onClick={goNextPage}
      >
        next page
      </Button>
    </div>
  );
}

export default UserPage;
