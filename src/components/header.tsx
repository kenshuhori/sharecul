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
  Spacer,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useSession } from '@/hooks/useSession';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { session, signOut } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("white", "gray.700");
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const handleSignOut = async () => {
    await signOut("/");
  };

  return (
    <header>
      <Flex pos="fixed" w="100%" h="90px" py={4} px="5%" bg={background} boxShadow="base">
        <Box>
          <Link href="/">
            <Image src="/sharecul.png" h="55px" alt="シェアカルのロゴです"></Image>
          </Link>
        </Box>
        <Box p="2" d={{ base: "none", md: "block" }}>
          <Text fontSize="xs" color="orange.400"><b>みんなとシェアするカルチャー</b></Text>
          <Text fontSize="md"><b>シェアカル ふたこ</b></Text>
        </Box>
        <Spacer />
        <Box p="4">
          <Link href="/about"><b>About</b></Link>
        </Box>
        <Box p="2">
          { isRendered && (
            <Menu>
            <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }} _expanded={{ bg: "gray.400" }} >
              <b>Category</b> <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>学びのシェア</MenuItem>
              <MenuItem>モノのシェア</MenuItem>
            </MenuList>
          </Menu>
          ) }
        </Box>
        <Box p="3" d={{ base: "none", md: "block" }}>
          <IconButton
            size="sm"
            aria-label="flick darkmode"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
        <Box p="2">
          {
            (() => {
              if (Object.keys(session).length) {
                return (
                  <Menu>
                    <MenuButton px={4} py={2} as={Button} colorScheme="teal" transition="all 0.2s" borderRadius="md">
                      <b>マイページ</b> <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                      <Link href="/mypage/account" _hover={{ textDecoration: "none" }}><MenuItem>アカウント</MenuItem></Link>
                      <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                    </MenuList>
                  </Menu>
                );
              } else {
                return (
                  <Link href="/auth/signin" _hover={{ textDecoration: "none" }}>
                    <Button colorScheme="teal" size="md"><b>ログイン</b></Button>
                  </Link>
                );
              }
            })()
          }
        </Box>
      </Flex>
    </header>
  );
};
