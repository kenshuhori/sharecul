import { useState } from 'react'
import { Flex, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, InputGroup, InputLeftElement, InputRightElement, Text, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { InputChecker } from '@/components/utils/InputChecker'
import api from '@/utils/api'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleChangePasswordConfirm = (event) => setPasswordConfirm(event.target.value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const submit = async event => {
    event.preventDefault()
    const res = await api.post('/api/admin',
      {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      }
    )
    console.log(res)
  }
  return (
    <form onSubmit={submit}>
      <Flex alignItems="center" justifyContent="center" m={8}>
        <Flex direction="column" background={formBackground} p={12}>
          <Heading mb={6}>Sign Up</Heading>
          <Text fontSize={12}>お名前</Text>
          <InputGroup>
            <Input placeholder="田中たろう" varient="Filled" mb={3} type="text" value={name} onChange={handleChangeName} />
            <InputRightElement children={<InputChecker type="text" value={name} />} />
          </InputGroup>
          <Text fontSize={12}>メールアドレス</Text>
          <InputGroup>
            <Input placeholder="sharecul@example.com" varient="Filled" mb={3} type="email" value={email} onChange={handleChangeEmail} />
            <InputRightElement children={<InputChecker type="email" value={email} />} />
          </InputGroup>
          <Text fontSize={12}>パスワード</Text>
          <InputGroup>
            <Input placeholder="******" varient="Fileed" mb={6} type="password" value={password} onChange={handleChangePassword} />
            <InputRightElement children={<InputChecker type="password" value={password} />} />
          </InputGroup>
          <Text fontSize={12}>パスワード確認用</Text>
          <InputGroup>
            <Input placeholder="******" varient="Fileed" mb={6} type="password" value={password_confirm} onChange={handleChangePasswordConfirm} />
            <InputRightElement children={<InputChecker type="password_confirm" value={!!password_confirm && password == password_confirm ? 'true' : 'false'} />} />
          </InputGroup>
          <Button type="submit" colorScheme="teal" mb={4}>登録</Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default IndexPage
