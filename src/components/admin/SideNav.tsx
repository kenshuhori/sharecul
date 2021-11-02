import {
  Flex,
  Link,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdFace,
  MdAccountBox,
  MdSettings
} from "react-icons/md";
import { useRouter } from 'next/router'

export const SideNav = () => {
  const normalGround = useColorModeValue("gray.200", "gray.700")
  const hoverGround = useColorModeValue("gray.300", "gray.600")
  const router = useRouter()
  const pages = [
    { icon: MdFace, name: "カルチャー", href: "/admin/cultures" },
    { icon: MdAccountBox, name: "ユーザー", href: "/admin/users" },
    { icon: MdSettings, name: "設定", href: "/admin/settings" }
  ]
  return (
    <Flex w="20%" bg={normalGround}>
      <List w="100%" boxShadow="lg">
        {pages.map(page => {
          let bg = normalGround
          if (page.href == router.pathname) {
            bg = hoverGround
          }
          return (
            <Link href={page.href} _hover={{ textDecoration: "none" }}>
              <ListItem p="16px" boxShadow="base" bg={bg} _hover={{ bg: hoverGround, cursor: "pointer" }}>
                <ListIcon as={page.icon} h={5} w={6} color="green.600" />{page.name}
              </ListItem>
            </Link>
          )}
        )}
      </List>
    </Flex>
  );
}
