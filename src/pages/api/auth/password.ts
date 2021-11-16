import nextConnect from 'next-connect';
import { supabase } from "@/utils/supabase";
import type { NextApiRequest, NextApiResponse } from 'next';

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const { user, error }: any = await supabase.auth.api.resetPasswordForEmail(
    req.body['email'],
    {
      redirectTo: 'http://localhost:3000/auth/signin'
    }
  );
  if (error) {
    res.status(400).json({ error: 'パスワード再設定処理に失敗しました。' });
  } else {
    res.status(200).json({ message: 'パスワード再設定メールを送信しました。' });
  }
});

export default apiRoute;
