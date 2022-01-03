import {
  Box,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useSession } from '@/hooks/useSession';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';
import { LinkButton } from "@/components/utils/LinkButton";

export const ToggleSignupButton = () => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' });
  const [session] = useRecoilState(sessionState);
  const { signOut } = useSession();

  const handleSignOut = async () => {
    await signOut("/");
  };

  return (
    <>
      {
        (() => {
          if (session) {
            return (
              <>
                <Box d={{ base: "none", md: "block" }}>
                  <Menu>
                    <MenuButton px={4} py={2} as={Button} colorScheme="teal" transition="all 0.2s" borderRadius="md" size={size}>
                      <b>マイページ</b> <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                      <Link href="/mypage/account" _hover={{ textDecoration: "none" }}><MenuItem>アカウント</MenuItem></Link>
                      <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box d={{ base: "block", md: "none" }}>
                  <LinkButton name="マイページ" path="/mypage/account"></LinkButton>
                </Box>
              </>
            );
          } else {
            return (
              <LinkButton name="新規登録" path="/auth/signup"></LinkButton>
            );
          }
        })()
      }
    </>
  );
};
