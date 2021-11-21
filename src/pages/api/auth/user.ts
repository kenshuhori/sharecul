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
  const { user, error } = await supabase.auth.api.deleteUser(
    req.body['user_uid'],
    process.env.SERVICE_ROLE_KEY
  );
  if (error) {
    console.log(error);
    res.status(400).json({message: 'エラーが発生しました。'});
  } else {
    const result = { message: '削除しました' };
    res.status(200).json(result);
  }
});

export default apiRoute;
