import {
  Box,
  Center,
  Container,
  Divider,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function MyPageIndexPage() {
  const [session] = useRecoilState(sessionState);
  const { replace } = useRouter();
  const menus = [
    { href: "/", name: "ホーム" },
    { href: "/mypage/account", name: "アカウント" },
    { href: "/mypage/cultures", name: "マイカルチャー" },
    { href: "/mypage/cultures/new", name: "カルチャー作成" },
  ];

  useEffect(() => {
    if (!session) {
      // replace('/');
    }
  }, []);

  return (
    <>
      <Container background="orange.50" >
        <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="20px" py="50px">
          <Box>
            <Center>
              <Text fontSize="2xl"><strong>マイページ</strong></Text>
            </Center>
            <Center>
              <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
            </Center>
          </Box>
          <Wrap spacing='1%'>
            {menus.map((menu, index) =>
              <WrapItem key={index} w={{ base: "49%", md: "49%" }} bg="white">
                <Link href={menu.href} w="100%">
                  <Center h="80px">
                    <Text fontSize="md">{menu.name}</Text>
                  </Center>
                </Link>
              </WrapItem>
            )}
          </Wrap>
        </Stack>
      </Container>
    </>
  );
};
