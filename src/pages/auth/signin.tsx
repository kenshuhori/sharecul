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
import { supabase } from '@/utils/supabase';
import { useSession } from '@/utils/useSession';

export default function AuthSigninPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const [loading, setLoading] = useState(false);
  const { session, setSession } = useSession();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    console.log(session)
    if (session) {
      location.href = '/mypage/account';
    }
  }, []);

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      const email = event.target.email.value;
      const password = event.target.password.value;
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
    } catch (error) {
      console.log(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Container background={formBackground} >
        <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="80px" pt="40px" pb="50px" >
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
            <Input name="email" type="email" placeholder="sharecul@example.com" size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード</Text>
            <Input name="password" type="password" placeholder="000xxxx0000" size="md" />
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <Button type="submit" colorScheme="teal" size="md" w="100%" disabled={loading}>
              <span>{loading ? '登録しています...' : '登録する'}</span>
            </Button>
          </Box>
          <Box justifyContent="flex-end">
            <Center>
              <Link href="/signin/password_reset" color="orange.500">パスワードをお忘れの方はこちら</Link>
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
