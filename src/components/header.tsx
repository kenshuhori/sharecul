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
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSession } from '@/hooks/useSession';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';
import { LinkButton } from "@/components/utils/LinkButton";

export const Header = () => {
  const [session] = useRecoilState(sessionState);
  const { signOut } = useSession();
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
      <Flex pos="fixed" w="100%" h="70px" py="8px" px="2%" bg={background} boxShadow="base">
        <Box>
          <Link href="/">
            <Image src="/sharecul.png" h="55px" alt="シェアカルのロゴです"></Image>
          </Link>
        </Box>
        <Box p="2">
          <Text fontSize="xs" color="orange.400"><b>みんなとシェアするカルチャー</b></Text>
          <Text fontSize="md"><b>シェアカル ふたこ</b></Text>
        </Box>
        <Spacer />
        <Box p="4" d={{ base: "none", md: "block" }}>
          <Link href="/about"><b>About</b></Link>
        </Box>
        <Box p="2" d={{ base: "none", md: "block" }}>
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
        <Box p="2">
          <LinkButton name="ログイン" path="/auth/signin" variant="ghost"></LinkButton>
        </Box>
        <Box p="2">
          {
            (() => {
              if (session) {
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
                  <LinkButton name="新規登録" path="/auth/signup"></LinkButton>
                );
              }
            })()
          }
        </Box>
      </Flex>
    </header>
  );
};
