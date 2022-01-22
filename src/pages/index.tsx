import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { LinkButton } from "@/components/utils/LinkButton";
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { readAll } from '@/utils/supabase';
import { parseISO, format } from 'date-fns';

import type { FormEvent } from 'react';
import type { Culture } from "@/@types/common";

export default function IndexPage() {
  const [timer, setTimer] = useState(null);
  const [cultures, setCultures] = useState<Culture[]>([]);
  const [filtered_cultures, setFilteredCultures] = useState<Culture[]>([]);
  const articleBackground = useColorModeValue("red.50", "gray.600");

  useEffect(() => {
    const fetchCultures = async () => {
      let res = await readAll('cultures', '*, profiles (username)', 'created_at') || [];
      setCultures(res);
      setFilteredCultures(res);
    };
    fetchCultures();
  }, []);

  const filterCultures = (text) => {
    let search_words = text.split(/\s+/);
    let filteredCultures = cultures.filter((culture) => {
      let culture_info = [culture.title, culture.description, culture.price].join();
      return search_words.every((word) => {
        return culture_info.indexOf(word) > -1;
      });
    });
    setFilteredCultures(filteredCultures);
  };

  const orderCultures = (value) => {
    let orderedCultures = filtered_cultures.sort((bef, af) => {
      if (bef[value] > af[value]) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredCultures([...orderedCultures]);
  };

  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    let text = event.target.value;
    if (timer){
      clearTimeout(timer);
    }
    setTimer(setTimeout(function() { filterCultures(text); }, 700));
  };

  const handleOrder = (event: FormEvent<HTMLSelectElement>) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }
    orderCultures(event.target.value);
  };

  const dateFormatter = (dateString) => {
    let date = parseISO(dateString);
    return format(date, 'yyyy/MM/dd');
  };

  return (
    <div>
      <Stack>
        <Box d="none">
          <Image src="/lake.jpg" w="100%" h="300px" alt="シェアカルのテーマ画像です"></Image>
        </Box>
        <Box>
          <Center pt={8}>
            <Text fontSize="2xl"><strong>学びのシェア</strong></Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
        <Box py="30px">
          <Flex direction={{ base: "column", md: "row" }} >
            <Box w={{ base: "100%", md: "55%" }} py={{ base: "4", md: "0" }} >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="タイトル、著者名、説明文" _hover={{ cursor: "pointer", boxShadow: "lg" }} onInput={(e) => {handleFilter(e);}} />
              </InputGroup>
            </Box>
            <Box m="0 0 0 auto">
              <HStack>
                <Box w="100px">
                  <Text>並び替え</Text>
                </Box>
                <Select _hover={{ cursor: "pointer" }} onChange={(e) => {handleOrder(e);}}>
                  <option value="created_at">新しい順</option>
                  <option value="price">価格が高い順</option>
                  <option value="title">タイトル順</option>
                  <option value="author">著者順</option>
                </Select>
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Box pb="100px">
          <section>
            <Wrap spacing='1%'>
            {filtered_cultures.map(culture =>
              <WrapItem key={culture.id} w={{ base: "100%", sm: "100%", md: "100%", lg: "49%" }}>
                <article>
                  <Flex py={8} my={4} direction={{ base: "column", md: "row" }} bg={articleBackground}>
                    <Container pb={{ base: 8, md: 0 }} maxW={{ base: "90%", md: "50%" }} minH="200px">
                      <Image src="/brothers.jpg" alt="シェアカルアイテムの画像です"></Image>
                    </Container>
                    <Container maxW={{ base: "90%", md: "50%" }} minH="200px">
                      <Stack h="100%">
                        <Box>
                          <Text fontSize="sm" textAlign="right">{dateFormatter(culture.created_at)}</Text>
                        </Box>
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
                          <LinkButton name="申し込む" path={`/cultures/${culture.id}`}></LinkButton>
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
      </Stack>
    </div>
  );
};
