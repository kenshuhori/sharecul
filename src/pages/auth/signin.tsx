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
import { LinkButton } from "@/components/utils/LinkButton"

const Signin = () => {
  const formBackground = useColorModeValue("orange.50", "gray.700")
  return (
    <div>
      <Container background={formBackground} >
        <Stack spacing={8} mx="auto" mt="100px" mb="50px" px="80px" pt="40px" pb="50px" >
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
            <Input placeholder="sharecul@example.com" size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">パスワード</Text>
            <Input placeholder="000xxxx0000" size="md" />
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <LinkButton name="ログインする" path="/culture/confirm"></LinkButton>
          </Box>
          <Box justifyContent="flex-end">
            <Center>
              <Link href="/signin/password_reset" color="orange.500">パスワードをお忘れの方はこちら</Link>
            </Center>
          </Box>
        </Stack>
      </Container>
      <Center mb="100px">
        <Link href="/signup" color="orange.500">アカウントをお持ちでない方はこちら</Link>
      </Center>
    </div>
  )
}

export default Signin
