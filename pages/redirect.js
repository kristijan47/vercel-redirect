import { NextApiRequest, NextApiResponse } from 'next';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const targetUrl = 'https://livingamonganimals.com/introducing-augie-the-remarkable-20-year-old-golden-retriever-who-has-recently-made-history-as-the-oldest-dog-of-her-breed-ever-recorded-2/';

  await delay(3000);

  res.writeHead(302, {
    Location: targetUrl,
  });
  res.end();
}
