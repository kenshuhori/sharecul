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
  Select,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <div>
      <Stack>
        <Box>
          <Image src="/lake-gdecf3ad1d_1920.jpg" w="100%" h="400px" alt="シェアカルのテーマ画像です"></Image>
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
          <Flex w="100%">
            <Box w="40%">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input type="text" placeholder="タイトル、著者名、説明文" _hover={{ cursor: "pointer", boxShadow: "lg" }} />
              </InputGroup>
            </Box>
            <Spacer />
            <Box>
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
        <Box px="100px" pb="100px">
          <section>
            <Stack>
              {[1, 2].map(item =>
                <article>
                  <Flex p={4}>
                    <Container maxW="40%" minH="200px">
                      <Image src="/brothers-g351175e76_1920.jpg" alt="シェアカルアイテムの画像です"></Image>
                    </Container>
                    <Container  maxW="40%" minH="200px">
                      <Stack>
                        <Box>
                          <Text fontSize="2xl"><b>タイトルが入ります</b></Text>
                        </Box>
                        <Flex>
                          <Text fontSize="sm">著者名が入ります</Text>
                          <Spacer />
                          <Text fontSize="lg">値段が入ります</Text>
                        </Flex>
                        <Container h="130px" overflow="hidden">
                          <Text fontSize="sm">説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</Text>
                        </Container>
                        <Box>
                          <Button colorScheme="teal" size="md">申し込む</Button>
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
