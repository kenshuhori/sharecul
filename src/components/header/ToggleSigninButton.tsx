import {
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';
import { LinkButton } from "@/components/utils/LinkButton";

export const ToggleSigninButton = () => {
  const [session] = useRecoilState(sessionState);

  return (
    <>
      {
        (() => {
          if (session) {
            return (
              <></>
            );
          } else {
            return (
              <LinkButton name="ログイン" path="/auth/signin" variant="ghost"></LinkButton>
            );
          }
        })()
      }
    </>
  );
};
