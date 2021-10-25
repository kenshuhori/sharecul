import { Flex, Box, Text, Button, Link, Image, Spacer, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

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
          About
        </Box>
        <Box p="4">
          Contact
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
          <Button colorScheme="teal" size="md">ログイン</Button>
        </Box>
      </Flex>
    </header>
  );
};
