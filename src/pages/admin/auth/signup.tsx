import { useState } from 'react';
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { supabase } from '@/utils/supabase';
import { InputChecker } from '@/components/utils/InputChecker';
import api from '@/utils/api';

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const handleSubmit = async (event: any) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await supabase.auth.signUp({
      email,
      password,
    });
  };
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e);
      }
    }>
      <Flex alignItems="center" justifyContent="center" m={8}>
        <Flex direction="column" background={formBackground} p={12}>
          <Heading mb={6}>アカウント登録</Heading>
          <Text fontSize={12}>メールアドレス</Text>
          <InputGroup>
            <Input name="email" placeholder="sharecul@example.com" varient="Filled" mb={3} type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />
            <InputRightElement>
              <InputChecker type="email" value={{ email: email }}/>
            </InputRightElement>
          </InputGroup>
          <Text fontSize={12}>パスワード</Text>
          <InputGroup>
            <Input name="password" placeholder="******" varient="Fileed" mb={6} type="password" value={password} onChange={(e) => {setPassword(e.target.value);}} />
            <InputRightElement>
              <InputChecker type="password" value={{ password: password }}/>
            </InputRightElement>
          </InputGroup>
          <Text fontSize={12}>パスワード確認用</Text>
          <InputGroup>
            <Input placeholder="******" varient="Fileed" mb={6} type="password" value={password_confirm} onChange={(e) => {setPasswordConfirm(e.target.value);}} />
            <InputRightElement>
              <InputChecker type="password_confirm" value={{ password: password, password_confirm: password_confirm }}/>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" colorScheme="teal" mb={4}>登録</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default IndexPage;
