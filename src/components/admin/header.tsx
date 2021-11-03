import {
  Flex,
  Box,
  Spacer,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("teal", "teal.400")
  const fontColor = useColorModeValue("white", "black")
  return (
    <header>
      <Flex pos="fixed" h="60px" w="100%" bg={bg} color={fontColor}>
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
        <Box p="3">
          <IconButton
            size="sm"
            color="black"
            aria-label="flick darkmode"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
      </Flex>
    </header>
  );
};
