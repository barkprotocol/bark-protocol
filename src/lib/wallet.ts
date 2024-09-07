// lib/wallet.ts

import { Connection, Keypair, PublicKey } from '@solana/web3.js';

export const getConnection = () => {
  return new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL as string);
};

// Example function to get a wallet (not used directly here but for reference)
// This is just a placeholder if you need to integrate a wallet provider in future client-side code
export const getWalletProvider = () => {
  // For server-side code, wallet interaction is usually not necessary; this is for reference
  // You would use Solana libraries directly to create transactions and interact with the blockchain
  return null;
};
