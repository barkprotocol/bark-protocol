import { PublicKey } from '@solana/web3.js';

// Fetch swap routes from Jupiter API
export const getSwapRoutes = async (
  tokenFrom: string,
  tokenTo: string,
  amount: number
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_JUPYTER_API_URL}?inputMint=${tokenFrom}&outputMint=${tokenTo}&amount=${amount}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch swap routes');
  }

  const data = await response.json();
  return data;
};

// Perform the swap using a route from Jupiter API
export const executeSwap = async (swapRoute: any) => {
  const response = await fetch('/api/solana/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(swapRoute),
  });

  if (!response.ok) {
    throw new Error('Failed to execute swap');
  }

  const result = await response.json();
  return result;
};
