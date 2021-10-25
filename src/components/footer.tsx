import { Stack, Center, Link, Image, Box, Text, useColorModeValue } from "@chakra-ui/react"

export const Footer = () => {
  const background = useColorModeValue("gray.300", "gray.700");
  return (
    <footer>
      <Center w="100%" bg={background} p="2">
        <Stack>
          <Box>
            <Center>
              <Box>
                <Link href="/">
                  <Image src="/sharecul.png" h="60px" alt="シェアカルのロゴです"></Image>
                </Link>
              </Box>
              <Box p={4}>
                <Text fontSize="xs" color="orange.400"><b>みんなとシェアするカルチャー</b></Text>
                <Text fontSize="md"><b>シェアカル ふたこ</b></Text>
              </Box>
            </Center>
          </Box>
          <Box>
            <Center>
              <Box px={4}>
                <Link href="/"><Text fontSize="xs">運営会社・ご意見ご要望・お問い合わせ</Text></Link>
              </Box>
              <Box px={4}>
                <Text fontSize="xs">Copyright 2021 シェアカルふたこ</Text>
              </Box>
            </Center>
          </Box>
        </Stack>
      </Center>
    </footer>
  );
};
