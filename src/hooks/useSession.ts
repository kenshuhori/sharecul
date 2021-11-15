import { supabase } from "@/utils/supabase";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  atom,
  useRecoilState,
} from 'recoil';
import api from '@/utils/api';

const sessionState = atom({
  key: 'session',
  default: {},
});

export const useSession = () => {
  const { replace } = useRouter();
  const [session, setSession] = useRecoilState<any>(sessionState);

  useEffect(() => {
    const session: any = supabase.auth.session();
    setSession(session);
  }, []);

  supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
  })

  async function signUp(email: string, password: string) {
    const { session, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    if (session) setSession(session);
    return { session };
  }

  async function signIn(email: string, password: string) {
    const { session, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    if (session) setSession(session);
    return { session };
  }

  async function signOut(redirect_path: string) {
    supabase.auth.signOut();
    replace(redirect_path);
  }

  async function deleteUser() {
    let query_params = { user_uid: session.user.id };
    let response = await api.delete('/api/auth/user', query_params);
  }
  return {session, signIn, signUp, signOut, deleteUser};
};
