import { NextApiRequest, NextApiResponse } from 'next';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const targetUrl = 'https://livingamonganimals.com/';

  await delay(3000);

  res.writeHead(302, {
    Location: targetUrl,
  });
  res.end();
}
