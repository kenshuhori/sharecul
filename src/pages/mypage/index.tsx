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
  useColorModeValue,
} from '@chakra-ui/react'
import { LinkButton } from "@/components/utils/LinkButton"
import { SearchIcon } from '@chakra-ui/icons'

const MyPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const articleBackground = useColorModeValue("red.50", "gray.600")
  return (
    <div>
      <Text>マイページ</Text>
    </div>
  )
}

export default MyPage
