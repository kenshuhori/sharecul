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
import { SearchIcon } from '@chakra-ui/icons'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const articleBackground = useColorModeValue("red.50", "gray.600")
  return (
    <div>
      <Stack>
        <Box>
          <Image src="/lake-gdecf3ad1d_1920.jpg" w="100%" h="300px" alt="シェアカルのテーマ画像です"></Image>
        </Box>
        <Box>
          <Center pt={8}>
            <Text fontSize="3xl"><strong>みんなのカルチャー</strong></Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
        <Box px="100px" py="30px">
          <Flex direction={{ base: "column", md: "row" }} >
            <Box w={{ base: "100%", md: "45%" }} py={{ base: "4", md: "0" }} >
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input type="text" placeholder="タイトル、著者名、説明文" _hover={{ cursor: "pointer", boxShadow: "lg" }} />
              </InputGroup>
            </Box>
            <Box m="0 0 0 auto">
              <HStack>
                <Box w="100px">
                  <Text>並び替え</Text>
                </Box>
                <Select _hover={{ cursor: "pointer" }}>
                  <option value="option1">新しい順</option>
                  <option value="option2">価格が安い順</option>
                  <option value="option3">価格が高い順</option>
                </Select>
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Box px="5%" pb="100px">
          <section>
            <Stack>
              {[1, 2].map(item =>
                <article>
                  <Flex py={8} my={4} direction={{ base: "column", md: "row" }} bg={articleBackground}>
                    <Container pb={{ base: 8, md: 0 }} maxW={{ base: "90%", md: "50%" }} minH="200px">
                      <Image src="/brothers-g351175e76_1920.jpg" alt="シェアカルアイテムの画像です"></Image>
                    </Container>
                    <Container maxW={{ base: "90%", md: "50%" }} minH="200px">
                      <Stack h="100%">
                        <Box>
                          <Text fontSize="2xl"><b>タイトルが入ります</b></Text>
                        </Box>
                        <Flex>
                          <Text fontSize="md">著者名が入ります</Text>
                          <Spacer />
                          <Text fontSize="md">値段が入ります</Text>
                        </Flex>
                        <Box maxH={{ sm:"100px", md: "100px", lg:"200px" }} overflow="hidden">
                          <Text fontSize="sm">説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</Text>
                        </Box>
                        <Spacer />
                        <Box justifyContent="flex-end">
                          <Link href="/culture" _hover={{ textDecoration: "none" }}>
                            <Button colorScheme="teal" size="md" w="100%">申し込む</Button>
                          </Link>
                        </Box>
                      </Stack>
                    </Container>
                  </Flex>
                </article>
              )}
            </Stack>
          </section>
        </Box>
      </Stack>
    </div>
  )
}

export default IndexPage
