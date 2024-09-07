import { PublicKey } from '@solana/web3.js';

// Define types for the response from the Jupiter API
interface SwapRoute {
  routeId: string;
  inAmount: string; // Amount of input tokens
  outAmount: string; // Amount of output tokens
  [key: string]: any; // For any additional properties
}

interface SwapRoutesResponse {
  routes: SwapRoute[];
}

// Fetch swap routes from Jupiter API
export const getSwapRoutes = async (
  tokenFrom: string,
  tokenTo: string,
  amount: number
): Promise<SwapRoutesResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_JUPYTER_API_URL;
  
  if (!apiUrl) {
    throw new Error('Jupiter API URL is not defined');
  }

  const url = new URL(apiUrl);
  url.searchParams.append('inputMint', tokenFrom);
  url.searchParams.append('outputMint', tokenTo);
  url.searchParams.append('amount', amount.toString());

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Failed to fetch swap routes: ${response.statusText}`);
    }

    const data: SwapRoutesResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching swap routes:', error);
    throw error;
  }
};

// Perform the swap using a route from Jupiter API
export const executeSwap = async (swapRoute: SwapRoute): Promise<any> => {
  try {
    const response = await fetch('/api/solana/swap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(swapRoute),
    });

    if (!response.ok) {
      throw new Error(`Failed to execute swap: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error executing swap:', error);
    throw error;
  }
};
