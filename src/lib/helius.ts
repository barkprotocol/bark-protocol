import { PublicKey, Transaction, SystemProgram, TransactionInstruction } from '@solana/web3.js';
import fetch from 'node-fetch';

const HELIUS_API_URL = process.env.NEXT_PUBLIC_HELIUS_API_URL;

interface SwapResponse {
  success: boolean;
  transactionURL?: string;
  message?: string;
}

export const initiateTokenSwap = async (
  fromToken: string,
  toToken: string,
  amount: number,
  userPublicKey: string
): Promise<SwapResponse> => {
  try {
    // Example of adding a dummy instruction. Replace with actual swap instructions.
    const transaction = new Transaction().add(
      new TransactionInstruction({
        programId: new PublicKey('YourSwapProgramId'), // Replace with the actual program ID
        keys: [
          { pubkey: new PublicKey(userPublicKey), isSigner: true, isWritable: true },
          // Add other necessary accounts here
        ],
        data: Buffer.from(JSON.stringify({ fromToken, toToken, amount })), // Adjust based on your swap program requirements
      })
    );

    // Serialize the transaction
    const serializedTransaction = transaction.serializeMessage().toString('base64');

    // Send the transaction to the Helius API
    const response = await fetch(`${HELIUS_API_URL}/swap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromToken,
        toToken,
        amount,
        userPublicKey,
        transaction: serializedTransaction,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to initiate token swap: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: result.success,
      transactionURL: result.transactionURL,
      message: result.message || 'Token swap initiated successfully.',
    };
  } catch (error) {
    console.error('Token swap error:', error);
    return {
      success: false,
      message: 'An error occurred while processing the token swap.',
    };
  }
};
