import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  Stack,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import api from '@/utils/api'

const IndexPage = () => {
  const formBackground = useColorModeValue("orange.50", "gray.700")
  const submit = async event => {
    event.preventDefault()
    const res = await api.post('/api/auth/signup',
      {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      }
    )
    console.log(res)
    // result.user => 'Ada Lovelace'
  }
  return (
    <form onSubmit={submit}>
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
            <Text fontSize="sm" mb="6px">お名前</Text>
            <Input type="text" name="name" placeholder="田中 太郎" required size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">メールアドレス</Text>
            <Input type="email" name="email" placeholder="sharecul@example.com" required size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード</Text>
            <Input type="password" name="password" placeholder="半角英数字6文字以上" required size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード確認用</Text>
            <Input type="password" placeholder="半角英数字6文字以上" required size="md" />
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <Button type="submit" colorScheme="teal" size="md" w="100%">登録する</Button>
          </Box>
        </Stack>
      </Container>
    </form>
  )
}

export default IndexPage
