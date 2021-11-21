import {
  Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function MyPageIndexPage() {
  const [session] = useRecoilState(sessionState);
  const { replace } = useRouter();

  useEffect(() => {
    if (!session) {
      replace('/');
    }
  }, []);

  return (
    <div>
      <Text>マイページ</Text>
    </div>
  );
};
