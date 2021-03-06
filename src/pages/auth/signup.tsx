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
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { InputChecker } from '@/components/utils/InputChecker';
import { SendMailComplete } from '@/components/auth/SendMailConplete';
import { useToast } from '@/hooks/useToast';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function AuthSignupPage() {
  const [session] = useRecoilState(sessionState);
  const { replace } = useRouter();
  const { signUp } = useSession();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const [complete, setComplete] = useState(false);
  const { messageOnToast } = useToast();

  useEffect(() => {
    if (session) {
      replace('/mypage');
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signUp(email, password, name);
      messageOnToast("メールを送信しました！", "success");
      setComplete(true);
    } catch (error: any) {
      messageOnToast(error.error_description || error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  if (complete) {
    return (<SendMailComplete title="アカウント作成" email={email}></SendMailComplete>);
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Container background="orange.50" >
          <Stack spacing={6} mx="auto" mt="80px" mb="50px" px={{ base: "10%", md: "20%"}} py="50px">
            <Box>
              <Center>
                <Text fontSize="2xl"><strong>アカウント作成</strong></Text>
              </Center>
              <Center>
                <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
              </Center>
            </Box>
            <Box>
              <Text fontSize="sm" mb="6px">お名前</Text>
              <InputGroup>
                <Input type="text" name="name" placeholder="シェア　太郎" onChange={(e) => {setName(e.target.value);}} required size="md" />
                <InputRightElement>
                  <InputChecker type="text" value={ {text: name} }/>
                </InputRightElement>
              </InputGroup>
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
  }
};
