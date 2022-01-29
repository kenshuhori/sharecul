import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { LinkButton } from "@/components/utils/LinkButton";
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { useToast } from '@/hooks/useToast';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';
import { read } from '@/utils/supabase';

import type { Culture } from "@/@types/common";

export default function MypageCultureIndexPage() {
  const [loading, setLoading] = useState(true);
  const { messageOnToast } = useToast();
  const [cultures, setCultures] = useState<Culture[]>([]);
  const [session] = useRecoilState(sessionState);

  useEffect(() => {
    if (!session) {
      // replace('/');
    } else {
      const fetchCultures = async () => {
        let res = await read('cultures', '*', { column: 'profile_id', value: session.user.id }) || [];
        setCultures(res);
      };
      fetchCultures();
    }
  }, [session]);

  return (
    <>
      <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="20px" py="50px">
        <Box>
          <Center>
            <Text fontSize="2xl"><strong>マイカルチャー</strong></Text>
          </Center>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
      </Stack>
      <Box pb="100px">
        <section>
          <Wrap spacing='1%'>
          {cultures.map(culture =>
            <WrapItem key={culture.id} w={{ base: "100%", sm: "100%", md: "100%", lg: "49%" }}>
              <article>
                <Flex py={8} my={4} direction={{ base: "column", md: "row" }} bg="red.50">
                  <Container pb={{ base: 8, md: 0 }} maxW={{ base: "90%", md: "50%" }} minH="200px">
                    <Image src="/brothers.jpg" alt="シェアカルアイテムの画像です"></Image>
                  </Container>
                  <Container maxW={{ base: "90%", md: "50%" }} minH="200px">
                    <Stack h="100%">
                      <Box>
                        <Text fontSize="2xl"><b>{culture.title}</b></Text>
                      </Box>
                      <Flex>
                        <Text fontSize="md">著者名が入ります</Text>
                        <Spacer />
                        <Text fontSize="md">{culture.price}</Text>
                      </Flex>
                      <Box maxH={{ sm:"100px", md: "100px", lg:"200px" }} overflow="hidden">
                        <Text fontSize="sm">{culture.description}</Text>
                      </Box>
                      <Spacer />
                      <Box justifyContent="flex-end">
                        <LinkButton name="申し込む" path="/culture"></LinkButton>
                      </Box>
                    </Stack>
                  </Container>
                </Flex>
              </article>
            </WrapItem>
          )}
          </Wrap>
        </section>
      </Box>
    </>
  );
}
