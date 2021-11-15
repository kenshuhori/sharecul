import {
  Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';

export default function MyPageIndexPage() {
  const { session } = useSession();
  const { replace } = useRouter();

  useEffect(() => {
    if (!session) {
      replace('/auth/signin');
    }
  }, []);

  return (
    <div>
      <Text>マイページ</Text>
    </div>
  );
};
