import { Flex, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react'
import api from '@/utils/api'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const submit = async () => {
    let body = { 'hoge': 'fuga' };
    let response = await api.post('/api/admin', body)
    console.log(response);
  }
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="kenshuhori@gmail.com" varient="Filled" mb={3} type="email" />
        <Input placeholder="******" varient="Fileed" mb={6} type="password" />
        <Button onClick={submit} colorScheme="teal" mb={6}>Log In</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
