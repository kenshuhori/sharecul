import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import { ChevronDownIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("white", "gray.700");
  return (
    <header>
      <Flex pos="fixed" w="100%" h={90} py={4} px={100} bg={background} boxShadow="base">
        <Box>
          <Link href="/">
            <Image src="/sharecul.png" h="60px" alt="シェアカルのロゴです"></Image>
          </Link>
        </Box>
        <Box p="4">
          <Text fontSize="xs" color="orange.400"><b>みんなとシェアするカルチャー</b></Text>
          <Text fontSize="md"><b>シェアカル ふたこ</b></Text>
        </Box>
        <Spacer />
        <Box p="4">
          <b>About</b>
        </Box>
        <Box p="2">
          <Menu>
            <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }} _expanded={{ bg: "gray.400" }} >
              <b>Category</b> <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>生活品</MenuItem>
              <MenuItem>知識・学び</MenuItem>
              <MenuItem>アクティビティ</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box p="3">
          <IconButton
            size="sm"
            aria-label="flick darkmode"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
        <Box p="2">
          <Button colorScheme="teal" size="md"><b>ログイン</b></Button>
        </Box>
      </Flex>
    </header>
  );
};
