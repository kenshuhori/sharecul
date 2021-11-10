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
    let session = supabase.auth.session()
    setSession(session);
  });

  async function signIn(email, password) {
    const { session, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setSession(session);
    return { session }
  }

  async function signOut() {
    supabase.auth.signOut();
  }
  return {session, signIn, signOut};
};
