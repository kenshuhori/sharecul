import { useState } from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import { Flex, Heading, InputGroup, InputLeftElement, InputRightElement, Text, Input, Button, useColorModeValue } from '@chakra-ui/react'
import api from '@/utils/api'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const submit = async () => {
    let body = { 'hoge': 'fuga' };
    let response = await api.post('/api/admin', body)
    console.log(response);
  }
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Sign Up</Heading>
        <Text fontSize={12}>お名前</Text>
        <InputGroup>
          <Input placeholder="田中たろう" varient="Filled" mb={3} type="text" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
        <Text fontSize={12}>メールアドレス</Text>
        <InputGroup>
          <Input placeholder="sharecul@example.com" varient="Filled" mb={3} type="email" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
        <Text fontSize={12}>パスワード</Text>
        <InputGroup>
          <Input placeholder="******" varient="Fileed" mb={6} type="password" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
        <Button onClick={submit} colorScheme="teal" mb={6}>Log In</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
