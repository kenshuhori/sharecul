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
  });

  async function signUp(email: string, password: string, username: string) {
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password
      },
      {
        redirectTo: '/mypage/account'
      }
    );
    if (error) throw error;
    initProfile(user.id, username);
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

  async function resetPassword(email: string) {
    let query_params = { email: email };
    let response = await api.delete('/api/auth/password', query_params);
  }

  async function deleteUser(redirect_path: string) {
    let query_params = { user_uid: session.user.id };
    // await deleteProfile(session.user.id);
    let response = await api.delete('/api/auth/user', query_params);
    await signOut(redirect_path);
  }

  async function initProfile(user_id: string, username: string) {
    const updates = {
      id: user_id,
      username,
      updated_at: new Date(),
    };
    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    });
    if (error) throw error;
  }

  async function deleteProfile(user_id: string) {
    const { data, error } = await supabase.from('profiles').delete().eq('id', user_id);

    if (error) throw error;
  }
  return {session, signIn, signUp, signOut, resetPassword, deleteUser};
};
