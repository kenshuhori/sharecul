import { Image, Stack, Flex, Box, Container, Center, Text, Spacer, Divider, Button, useColorModeValue } from '@chakra-ui/react'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <div>
      <Stack>
        <Box>
          <Center pt={8}>
            <Text fontSize="3xl"><b>お申し込み内容確認</b></Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" />
          </Center>
        </Box>
        <Box px="200px" pb="100px">
          <Flex p={2}>
            <Container maxW="40%" minH="200px">
              <Image src="/brothers-g351175e76_1920.jpg" alt="シェアカルアイテムの画像です"></Image>
            </Container>
          </Flex>
        </Box>
      </Stack>
    </div>
  )
}

export default IndexPage
