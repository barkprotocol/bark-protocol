// pages/api/solana/swap.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { PublicKey, Transaction, TransactionInstruction, Connection, Keypair } from '@solana/web3.js';
import { getWalletProvider } from '@/lib/wallet'; // Ensure this utility function returns the correct wallet provider

// Replace with your Solana network RPC URL
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const swapRoute = req.body;

    // Validate swapRoute here if needed
    if (!swapRoute.routeId || !swapRoute.inAmount || !swapRoute.outAmount) {
      return res.status(400).json({ error: 'Invalid swap route data' });
    }

    // Create a new transaction
    const transaction = new Transaction();

    // Replace with the actual instruction needed for your swap
    // Example of adding a swap instruction (this is just a placeholder)
    transaction.add(new TransactionInstruction({
      programId: new PublicKey('YourProgramId'), // Replace with the actual program ID for the swap
      keys: [
        { pubkey: new PublicKey('YourAccountPubkey'), isSigner: true, isWritable: true },
        { pubkey: new PublicKey('TokenAccountFromPubkey'), isSigner: false, isWritable: true },
        { pubkey: new PublicKey('TokenAccountToPubkey'), isSigner: false, isWritable: true }
      ],
      data: Buffer.from(JSON.stringify(swapRoute)), // Adjust the data format based on your needs
    }));

    // Send the transaction
    const provider = await getWalletProvider();
    if (!provider) {
      throw new Error('Wallet provider not found');
    }

    // Sign and send the transaction
    const txId = await provider.sendTransaction(transaction, connection);

    res.status(200).json({ txId });
  } catch (error) {
    console.error('Error executing swap:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
