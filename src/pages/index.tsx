import { Image, Stack, Flex, Box, Container, Center, Text, Spacer, Divider, Button, useColorModeValue } from '@chakra-ui/react'

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
            <Divider w="200px" borderBottomWidth="3px" />
          </Center>
        </Box>
        <Box px="100px">
          <Flex w="100%">
            <Box>
              タブ
            </Box>
            <Spacer />
            <Box>
              並び替え
            </Box>
          </Flex>
        </Box>
        <Box px="100px" pb="100px">
          <section>
            <Stack>
              {[1, 2, 3].map(item =>
                <article>
                  <Flex p={2}>
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
