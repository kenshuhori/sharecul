import { Flex, Box, Spacer } from "@chakra-ui/react"

export const Header = () => {
  return (
    <header>
      <Flex pos="fixed" w="100%" bg="teal">
        <Box p="4" color="white">
          シェアカル
        </Box>
        <Spacer />
        <Box p="4" color="white">
          About
        </Box>
        <Box p="4" color="white">
          Service
        </Box>
        <Box p="4" color="white">
          Contact
        </Box>
      </Flex>
    </header>
  );
};
