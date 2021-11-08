import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Request to POST:api/admin/index has come!!");
  const result = { hoge: 'string' };
  res.status(200).json(result);
});

export default apiRoute;
