import { Connection, Keypair, PublicKey, Transaction, SystemProgram, AccountInfo } from '@solana/web3.js';

// Initialize the connection to the Solana blockchain
export const connection = new Connection(process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com', 'confirmed');

// Function to get the balance of a given public key
export async function getBalance(publicKey: PublicKey): Promise<number> {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / 1_000_000_000; // Convert lamports to SOL
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw new Error('Failed to fetch balance');
  }
}

// Function to get account information
export async function getAccountInfo(publicKey: PublicKey): Promise<AccountInfo<Buffer> | null> {
  try {
    const accountInfo = await connection.getAccountInfo(publicKey);
    return accountInfo;
  } catch (error) {
    console.error("Error fetching account info:", error);
    throw new Error('Failed to fetch account info');
  }
}
