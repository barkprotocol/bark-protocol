import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  TransactionInstruction,
  Keypair,
  Account,
} from '@solana/web3.js';
import {
  Token,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { connection } from './solana';

// Function to ensure the existence of an associated token account
async function ensureAssociatedTokenAccount(
  walletPublicKey: PublicKey,
  tokenMintAddress: PublicKey
): Promise<PublicKey> {
  const token = new Token(connection, tokenMintAddress, TOKEN_PROGRAM_ID, null);
  const associatedTokenAccount = await token.getOrCreateAssociatedAccountInfo(walletPublicKey);
  return associatedTokenAccount.address;
}

// Function to transfer SOL
export async function transferSOL(
  fromKeypair: Keypair,
  toPublicKey: PublicKey,
  amount: number // Amount in SOL
): Promise<string> {
  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromKeypair.publicKey,
        toPubkey: toPublicKey,
        lamports: amount * 1_000_000_000, // Convert SOL to lamports
      })
    );

    // Sign and send the transaction
    const signature = await connection.sendTransaction(transaction, [fromKeypair], {
      skipPreflight: false,
      preflightCommitment: 'confirmed',
    });

    // Wait for confirmation
    await connection.confirmTransaction(signature, 'confirmed');

    return signature;
  } catch (error) {
    console.error("Error transferring SOL:", error);
    throw new Error('Failed to transfer SOL');
  }
}

// Function to transfer SPL tokens
export async function transferSPLToken(
  fromKeypair: Keypair,
  toPublicKey: PublicKey,
  amount: number, // Amount in token units
  tokenMintAddress: PublicKey
): Promise<string> {
  try {
    const fromTokenAccount = await ensureAssociatedTokenAccount(fromKeypair.publicKey, tokenMintAddress);
    const toTokenAccount = await ensureAssociatedTokenAccount(toPublicKey, tokenMintAddress);

    const transaction = new Transaction().add(
      Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        fromTokenAccount,
        toTokenAccount,
        fromKeypair.publicKey,
        [],
        amount
      )
    );

    // Sign and send the transaction
    const signature = await connection.sendTransaction(transaction, [fromKeypair], {
      skipPreflight: false,
      preflightCommitment: 'confirmed',
    });

    // Wait for confirmation
    await connection.confirmTransaction(signature, 'confirmed');

    return signature;
  } catch (error) {
    console.error("Error transferring SPL token:", error);
    throw new Error('Failed to transfer SPL token');
  }
}

// Function to transfer NFTs
export async function transferNFT(
  fromKeypair: Keypair,
  toPublicKey: PublicKey,
  nftMintAddress: PublicKey
): Promise<string> {
  try {
    const fromTokenAccount = await ensureAssociatedTokenAccount(fromKeypair.publicKey, nftMintAddress);
    const toTokenAccount = await ensureAssociatedTokenAccount(toPublicKey, nftMintAddress);

    const transaction = new Transaction().add(
      Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        fromTokenAccount,
        toTokenAccount,
        fromKeypair.publicKey,
        [],
        1 // NFTs typically have a supply of 1, but this might differ based on the token
      )
    );

    // Sign and send the transaction
    const signature = await connection.sendTransaction(transaction, [fromKeypair], {
      skipPreflight: false,
      preflightCommitment: 'confirmed',
    });

    // Wait for confirmation
    await connection.confirmTransaction(signature, 'confirmed');

    return signature;
  } catch (error) {
    console.error("Error transferring NFT:", error);
    throw new Error('Failed to transfer NFT');
  }
}

// Example function to demonstrate how you might use these functions
export async function executeTransaction(
  fromKeypair: Keypair,
  toPublicKey: PublicKey,
  amount: number,
  tokenMintAddress?: PublicKey
): Promise<string> {
  try {
    if (tokenMintAddress) {
      // If a token mint address is provided, perform an SPL token transfer
      return await transferSPLToken(fromKeypair, toPublicKey, amount, tokenMintAddress);
    } else {
      // Otherwise, perform a SOL transfer
      return await transferSOL(fromKeypair, toPublicKey, amount);
    }
  } catch (error) {
    console.error("Error executing transaction:", error);
    throw new Error('Failed to execute transaction');
  }
}
