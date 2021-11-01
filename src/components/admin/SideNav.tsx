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
  MdFace,
  MdAccountBox,
  MdSettings
} from "react-icons/md";

export const SideNav = () => {
  const backGround = useColorModeValue("gray.200", "gray.700")
  return (
    <Flex w="20%" bg={backGround}>
      <List w="100%" boxShadow="lg">
        <Link href="/admin/cultures" _hover={{ textDecoration: "none" }}>
          <ListItem p="16px" boxShadow="base" _hover={{ backgroundColor: "gray.300", cursor: "pointer" }}>
            <ListIcon as={MdFace} h={5} w={6} color="green.600" />カルチャー
          </ListItem>
        </Link>
        <Link href="/admin/users" _hover={{ textDecoration: "none" }}>
          <ListItem p="16px" boxShadow="base" _hover={{ backgroundColor: "gray.300", cursor: "pointer" }}>
            <ListIcon as={MdAccountBox} h={5} w={6}  color="green.600" />ユーザー
          </ListItem>
        </Link>
        <Link href="/admin/settings" _hover={{ textDecoration: "none" }}>
          <ListItem p="16px" boxShadow="base" _hover={{ backgroundColor: "gray.300", cursor: "pointer" }}>
            <ListIcon as={MdSettings} h={5} w={6}  color="green.600" />設定
          </ListItem>
        </Link>
      </List>
    </Flex>
  );
}
