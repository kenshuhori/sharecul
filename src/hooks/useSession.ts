import { supabase } from "@/utils/supabase";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  atom,
  useRecoilState,
} from 'recoil';

const sessionState = atom({
  key: 'session',
  default: null,
});

export const useSession = () => {
  const { replace } = useRouter();
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    let session = supabase.auth.session()
    setSession(session);
  });

  async function signIn(email: string, password: string) {
    const { session, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setSession(session);
    return { session }
  }

  async function signOut(redirect_path: string) {
    supabase.auth.signOut();
    replace(redirect_path);
  }
  return {session, signIn, signOut};
};
