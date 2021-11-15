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
  default: null,
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
    const { session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password
      },
      {
        data: {
          name: '名無しの権兵衛'
        },
        redirectTo: '/mypage/account'
      }
    );
    if (error) throw error;
    return { session };
  }

  async function signIn(email: string, password: string) {
    const { session, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    return { session };
  }

  async function signOut(redirect_path: string) {
    supabase.auth.signOut();
    replace(redirect_path);
  }

  async function deleteUser() {
    let query_params = { user_uid: session.user.id };
    let response = await api.delete('/api/auth/user', query_params);
    console.log("ここ:" + response);
    console.log(response);
  }
  return {session, signIn, signUp, signOut, deleteUser};
};
