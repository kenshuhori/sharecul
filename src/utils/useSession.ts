import { supabase } from "@/utils/supabase";
import { useState, useEffect } from 'react';
import {
  atom,
  useRecoilState,
} from 'recoil';

const sessionState = atom({
  key: 'session',
  default: null,
});

export const useSession = () => {
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    setSession(supabase.auth.session())
  })
  return {session, setSession}
}
