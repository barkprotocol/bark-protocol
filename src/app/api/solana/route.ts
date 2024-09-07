// app/api/solana/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { inputMint, outputMint, amount } = req.query;

  if (!inputMint || !outputMint || !amount) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  try {
    const url = new URL(process.env.NEXT_PUBLIC_JUPYTER_API_URL as string);
    url.searchParams.append('inputMint', inputMint as string);
    url.searchParams.append('outputMint', outputMint as string);
    url.searchParams.append('amount', amount as string);

    const response = await fetch(url.toString());
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching swap routes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
