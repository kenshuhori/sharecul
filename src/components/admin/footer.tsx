import {
  Center,
  useColorModeValue
} from "@chakra-ui/react"

export const Footer = () => {
  const bg = useColorModeValue("teal", "teal.900")
  const fontColor = useColorModeValue("white", "white")
  return (
    <footer>
      <Center w="100%" bg={bg} p="2" color={fontColor}>
        シェアカル運営社
      </Center>
    </footer>
  );
};
