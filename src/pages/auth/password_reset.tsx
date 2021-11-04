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

const IndexPage = () => {
  const formBackground = useColorModeValue("orange.50", "gray.700")
  return (
    <Container background={formBackground} >
      <Text>パスワード再設定</Text>
    </Container>
  )
}

export default IndexPage
