import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const submit = async () => {
    await fetch("/api/admin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "hoge": "fuga" }),
    })
    .then((res) => {
      console.log("POSTリクエスト成功");
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="kenshuhori@gmail.com" varient="Filled" mb={3} type="email" />
        <Input placeholder="******" varient="Fileed" mb={6} type="password" />
        <Button onClick={submit} colorScheme="teal" mb={6}>Log In</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
