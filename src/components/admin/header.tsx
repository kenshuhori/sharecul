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
  const bg = useColorModeValue("teal", "teal.900")
  const fontColor = useColorModeValue("white", "white")
  const iconColor = useColorModeValue("black", "white")
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
            color={iconColor}
            aria-label="flick darkmode"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
      </Flex>
    </header>
  );
};
