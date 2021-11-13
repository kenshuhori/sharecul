import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { InputChecker } from '@/components/utils/InputChecker';
import { useToast } from '@/hooks/useToast';

export default function AuthSignupPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const { replace } = useRouter();
  const { session, signUp } = useSession();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const { messageOnToast } = useToast();

  useEffect(() => {
    if (Object.keys(session).length) {
      replace('/mypage/account');
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { session } = await signUp(email, password);
      if (session) {
        replace('/mypage/account');
      }
    } catch (error: any) {
      messageOnToast(error.error_description || error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Container background={formBackground} >
        <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="80px" py="50px">
          <Box>
            <Center>
              <Text fontSize="2xl"><strong>アカウント作成</strong></Text>
            </Center>
            <Center>
              <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
            </Center>
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">メールアドレス</Text>
            <InputGroup>
              <Input type="email" name="email" placeholder="sharecul@example.com" onChange={(e) => {setEmail(e.target.value);}} required size="md" />
              <InputRightElement>
                <InputChecker type="email" value={ {email: email} }/>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード</Text>
            <InputGroup>
              <Input type="password" name="password" placeholder="半角英数字6文字以上" onChange={(e) => {setPassword(e.target.value);}} required size="md" />
              <InputRightElement>
                <InputChecker type="password" value={ {password: password} }/>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード確認用</Text>
            <InputGroup>
              <Input type="password" placeholder="半角英数字6文字以上" onChange={(e) => {setPasswordConfirm(e.target.value);}} required size="md" />
              <InputRightElement>
                <InputChecker type="password_confirm" value={ {password: password, password_confirm: password_confirm} }/>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <Button type="submit" colorScheme="teal" size="md" w="100%" disabled={loading}>
              <span>{loading ? '登録しています...' : '登録する'}</span>
            </Button>
          </Box>
        </Stack>
      </Container>
    </form>
  );
};
