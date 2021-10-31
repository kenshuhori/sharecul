import { Flex, Box, Spacer, IconButton, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Flex pos="fixed" h="60px" w="100%" bg="teal">
        <Box p="4" color="white">
          シェアカル
        </Box>
        <Spacer />
        <Box p="4" color="white">
          About
        </Box>
        <Box p="4" color="white">
          Contact
        </Box>
        <Box p="3">
          <IconButton
            size="sm"
            aria-label="flick darkmode"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
      </Flex>
    </header>
  );
};
