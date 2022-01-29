import {
  Flex,
  Box,
  Spacer
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <header>
      <Flex pos="fixed" h="60px" w="100%" bg="teal" color="white">
        <Box p="4">
          シェアカル
        </Box>
        <Spacer />
        <Box p="4">
          About
        </Box>
        <Box p="4">
          Contact
        </Box>
      </Flex>
    </header>
  );
};
