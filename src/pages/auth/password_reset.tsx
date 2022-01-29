import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Input,
  Link,
  Stack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { useToast } from '@/hooks/useToast';
import { SendMailComplete } from '@/components/auth/SendMailConplete';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function AuthPasswordResetPage() {
  const [session] = useRecoilState(sessionState);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [complete, setComplete] = useState(false);
  const { resetPassword } = useSession();
  const { replace } = useRouter();
  const { messageOnToast } = useToast();

  useEffect(() => {
    if (session) {
      replace('/mypage');
    }
  }, []);

  async function reset() {
    try {
      setLoading(true);
      await resetPassword(email);
      messageOnToast("メールを送信しました。", "success");
      setComplete(true);
    } catch (error: any) {
      messageOnToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  if (complete) {
    return (<SendMailComplete title="パスワード再設定" email={email}></SendMailComplete>);
  } else {
    return (
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <Container background="orange.50" >
          <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="80px" pt="40px" pb="50px" >
            <Box>
              <Center>
                <Text fontSize="2xl"><strong>パスワード再設定</strong></Text>
              </Center>
              <Center>
                <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
              </Center>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="sm" mb="6px">メールアドレス</Text>
              <Input name="email" type="email" placeholder="sharecul@example.com" size="md" onChange={(e) => {setEmail(e.target.value);}}  />
            </Box>
            <Spacer />
            <Box justifyContent="flex-end">
              <Button type="submit" colorScheme="teal" size="md" w="100%" onClick={() => reset()} disabled={loading}>
                <span>{loading ? '送信しています...' : '送信'}</span>
              </Button>
            </Box>
          </Stack>
        </Container>
        <Center mb="100px">
          <Link href="/auth/signup" color="orange.500">アカウントをお持ちでない方はこちら</Link>
        </Center>
      </form>
    );
  }
};
