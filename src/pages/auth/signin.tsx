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
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function AuthSigninPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const [loading, setLoading] = useState(false);
  const { signIn } = useSession();
  const { replace } = useRouter();
  const [session] = useRecoilState(sessionState);

  useEffect(() => {
    if (session) {
      replace('/mypage');
    }
  }, [session]);

  const handleSubmit = async (event: any) => {
    try {
      setLoading(true);
      const session　= await signIn(event.target.email.value, event.target.password.value);
      if (session) {
        replace('/mypage');
      }
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Container background={formBackground} >
        <Stack spacing={6} mx="auto" mt="80px" mb="50px" px={{ base: "10%", md: "20%"}} pt="40px" pb="50px">
          <Box>
            <Center>
              <Text fontSize="2xl"><strong>ログイン</strong></Text>
            </Center>
            <Center>
              <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
            </Center>
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">メールアドレス</Text>
            <Input name="email" type="email" placeholder="sharecul@example.com" size="md" required />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード</Text>
            <Input name="password" type="password" placeholder="******" size="md" required />
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <Button type="submit" colorScheme="teal" size="md" w="100%" disabled={loading}>
              <span>{loading ? 'ログインしています...' : 'ログイン'}</span>
            </Button>
          </Box>
          <Box justifyContent="flex-end">
            <Center>
              <Link href="/auth/password_reset" color="orange.500">パスワードをお忘れの方はこちら</Link>
            </Center>
          </Box>
        </Stack>
      </Container>
      <Center mb="100px">
        <Link href="/auth/signup" color="orange.500">アカウントをお持ちでない方はこちら</Link>
      </Center>
    </form>
  );
};
