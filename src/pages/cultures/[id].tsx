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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LinkButton } from "@/components/utils/LinkButton";
import { SearchIcon } from '@chakra-ui/icons';
import { read } from '@/utils/supabase';
import type { Culture } from "@/@types/common";

export default function CultureIndexPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [culture, setCulture] = useState<Culture>({});

  useEffect(() => {
    if (router.query.id) {
      const fetchCulture = async () => {
        let res = await read('cultures', '*, profiles (username)', { column: 'id', value: router.query.id }) || [];
        setCulture(res);
        setIsLoaded(true);
      };
      fetchCulture();
    }
  }, [router]);

  {
    return isLoaded && (
    <div>
      <Stack>
        <Box>
          <Center pt={8}>
            <Text fontSize="2xl"><strong>お申込み</strong></Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
        <Box px="5%" pb="100px">
          <section>
            <Stack>
              <article>
                <Flex py={8} my={4} direction={{ base: "column", md: "row" }} >
                  <Container pb={{ base: 8, md: 0 }} maxW={{ base: "90%", md: "50%" }} minH="200px">
                    <Stack h="100%">
                      <Box>
                        <Image src="/brothers.jpg" alt="シェアカルアイテムの画像です" pb={8}></Image>
                      </Box>
                      <Box>
                        <Text fontSize="2xl"><b>{culture.title}</b></Text>
                      </Box>
                      <Flex>
                        <Text fontSize="md">{culture.profiles.username}</Text>
                        <Spacer />
                        <Text fontSize="md">{culture.price}</Text>
                      </Flex>
                      <Box>
                        <Text fontSize="sm">{culture.description}</Text>
                      </Box>
                    </Stack>
                  </Container>
                  <Container maxW={{ base: "90%", md: "50%" }} minH="200px">
                    <Stack spacing={6}>
                      <Box>
                        <Text fontSize="sm" mb="6px">お名前（必須）</Text>
                        <Input placeholder="姓名" size="md" />
                      </Box>
                      <Box>
                        <Text fontSize="sm" mb="6px">メールアドレス（必須）</Text>
                        <Input placeholder="sharecul@example.com" size="md" />
                      </Box>
                      <Box>
                        <Text fontSize="sm" mb="6px">電話番号（必須）</Text>
                        <Input placeholder="000xxxx0000" size="md" />
                      </Box>
                      <Box>
                        <Text fontSize="sm" mb="6px">その他</Text>
                        <Textarea placeholder="ご意見ご要望・予め伝えておきたいこと" size="md" resize="vertical" h="300px" />
                      </Box>
                      <Box justifyContent="flex-end">
                        <LinkButton name="確認画面へ" path="/culture/[id]/confirm"></LinkButton>
                      </Box>
                    </Stack>
                  </Container>
                </Flex>
              </article>
            </Stack>
          </section>
        </Box>
      </Stack>
    </div>
  );}
};
