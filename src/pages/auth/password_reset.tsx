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

export default function AuthPasswordResetPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const [loading, setLoading] = useState(false);
  const { session } = useSession();
  const { replace } = useRouter();

  useEffect(() => {
    if (session) {
      replace('/mypage/account');
    }
  }, []);

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
      }}
    >
      <Container background={formBackground} >
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
            <Input name="email" type="email" placeholder="sharecul@example.com" size="md" />
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <Button type="submit" colorScheme="teal" size="md" w="100%" disabled={loading}>
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
};
