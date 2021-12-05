import {
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSession } from '@/hooks/useSession';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export const ToggleSignoutButton = () => {
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
              <Button onClick={handleSignOut} size={size} >ログアウト</Button>
            );
          } else {
            return (
              <></>
            );
          }
        })()
      }
    </>
  );
};
