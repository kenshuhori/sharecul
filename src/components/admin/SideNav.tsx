import {
  Box,
  Flex,
  Link,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdCheckCircle,
  MdSettings
} from "react-icons/md";

export const SideNav = () => {
  const backGround = useColorModeValue("gray.200", "gray.700")
  return (
    <Flex w="20%" bg={backGround}>
      <List w="100%" boxShadow="lg">
        <ListItem p="16px" boxShadow="base" _hover={{ backgroundColor: "gray.300", cursor: "pointer" }}>
          <ListIcon as={MdCheckCircle} color="green.500" />カルチャー
        </ListItem>
        <ListItem p="16px" boxShadow="base" _hover={{ backgroundColor: "gray.300", cursor: "pointer" }}>
          <ListIcon as={MdCheckCircle} color="green.500" />ユーザー
        </ListItem>
        <ListItem p="16px" boxShadow="base" _hover={{ backgroundColor: "gray.300", cursor: "pointer" }}>
          <ListIcon as={MdSettings} color="green.500" />設定
        </ListItem>
      </List>
    </Flex>
  );
}
