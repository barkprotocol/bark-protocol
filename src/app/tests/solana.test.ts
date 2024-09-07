import { Keypair, PublicKey } from '@solana/web3.js';
import { transferSOL, transferSPLToken, transferNFT, executeTransaction } from './solana';

// Test case for insufficient funds
async function testInsufficientFunds() {
  try {
    const fromKeypair = Keypair.generate(); // Sender with insufficient funds
    const toPublicKey = Keypair.generate().publicKey; // Recipient
    await transferSOL(fromKeypair, toPublicKey, 1000); // Large amount
  } catch (error) {
    console.log("Expected error due to insufficient funds:", error.message);
  }
}

// Test case for non-existent token account
async function testNonExistentTokenAccount() {
  try {
    const fromKeypair = Keypair.generate(); // Sender
    const toPublicKey = Keypair.generate().publicKey; // Recipient
    const invalidTokenMintAddress = new PublicKey("InvalidMintAddress1234567890"); // Invalid address
    await transferSPLToken(fromKeypair, toPublicKey, 10, invalidTokenMintAddress);
  } catch (error) {
    console.log("Expected error due to non-existent token account:", error.message);
  }
}

// Test case for invalid public key
async function testInvalidPublicKey() {
  try {
    const fromKeypair = Keypair.generate(); // Sender
    const invalidPublicKey = new PublicKey("InvalidPublicKey1234567890"); // Invalid address
    await transferSOL(fromKeypair, invalidPublicKey, 1);
  } catch (error) {
    console.log("Expected error due to invalid public key:", error.message);
  }
}

// Test case for successful transaction
async function testSuccessfulTransaction() {
  try {
    const fromKeypair = Keypair.generate(); // Sender
    const toPublicKey = Keypair.generate().publicKey; // Recipient
    const amount = 0.01; // Amount in SOL
    const tokenMintAddress = new PublicKey("YourTokenMintAddressHere"); // Replace with a valid token mint address

    // Test SOL transfer
    const solSignature = await transferSOL(fromKeypair, toPublicKey, amount);
    console.log("SOL transfer successful with signature:", solSignature);

    // Test SPL token transfer
    const splTokenSignature = await transferSPLToken(fromKeypair, toPublicKey, 10, tokenMintAddress);
    console.log("SPL token transfer successful with signature:", splTokenSignature);

    // Test NFT transfer
    const nftMintAddress = new PublicKey("YourNftMintAddressHere"); // Replace with a valid NFT mint address
    const nftSignature = await transferNFT(fromKeypair, toPublicKey, nftMintAddress);
    console.log("NFT transfer successful with signature:", nftSignature);
  } catch (error) {
    console.error("Error during successful transaction test:", error.message);
  }
}

// Run all tests
async function runTests() {
  await testInsufficientFunds();
  await testNonExistentTokenAccount();
  await testInvalidPublicKey();
  await testSuccessfulTransaction();
}

// Execute tests
runTests();
