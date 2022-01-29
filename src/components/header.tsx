import React from "react";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  IconButton,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { LinkButton } from "@/components/utils/LinkButton";
import { ToggleSignupButton } from "@/components/header/ToggleSignupButton";
import { ToggleSigninButton } from "@/components/header/ToggleSigninButton";
import { ToggleSignoutButton } from "@/components/header/ToggleSignoutButton";

export const Header = () => {
  const [isRendered, setIsRendered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const size = useBreakpointValue({ base: 'sm', md: 'md' });

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <header>
      <Flex pos="fixed" w="100%" h={{ base: "60px", md: "70px" }} py="8px" px="2%" bg="white" boxShadow="base">
        <Box>
          <Link href="/">
            <Image src="/sharecul.png" h={{ base: "40px", md: "55px" }} alt="シェアカルのロゴです"></Image>
          </Link>
        </Box>
        <Box p="2">
          <Text fontSize="xs" color="orange.400" d={{ base: "none", md: "block" }}><b>みんなとシェアするカルチャー</b></Text>
          <Text fontSize="md" d={{ base: "none", md: "block" }}><b>シェアカル ふたこ</b></Text>
          <Text fontSize="xs" d={{ base: "block", md: "none" }}><b>シェアカル<br/>ふたこ</b></Text>
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
        <Box p="2" d={{ base: "none", md: "block" }}>
          <ToggleSigninButton />
        </Box>
        <Box p="2" size={{ base: "sm", md: "md" }}>
          <ToggleSignupButton />
        </Box>
        <Box p="2" d={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="toggle menu"
            icon={<HamburgerIcon />}
            size={size}
            ref={btnRef}
            onClick={onOpen}
          ></IconButton>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <Stack>
                  <Center>
                    <ToggleSignupButton />
                  </Center>
                  <Center>
                    <ToggleSigninButton />
                  </Center>
                  <Center>
                    <Link href="/about">シェアカルとは</Link>
                  </Center>
                  <Spacer />
                  <Center>
                    <ToggleSignoutButton />
                  </Center>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </header>
  );
};
