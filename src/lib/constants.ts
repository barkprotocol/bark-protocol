// lib/constants.ts

// Define types for better type safety
interface ApiUrls {
  JUPYTER_SWAP: string;
  METADATA_SERVICE: string;
  ERROR_TRACKING_SERVICE: string;
  SOLANA_PAY: string;  // Endpoint for Solana payment API
}

interface SolanaNetworks {
  DEVNET: string;
  MAINNET: string;
}

interface WalletAdapters {
  PHANTOM: string;
  SOLFLARE: string;
  BACKPACK: string;
}

interface Colors {
  GREY: string;
  LIGHT_GREY: string;
  WHITE: string;
  BLACK: string;
  GREEN: string;
  BLUE: string;
  SAND: string;
}

interface Fonts {
  TITLE: string;
  BODY: string;
  SPECIAL: string;
}

interface BadgeTypes {
  NEW: string;
  ESSENTIAL: string;
  POPULAR: string;
}

interface TokenInfo {
  TOKEN_PROGRAM_ID: string;
  NFT_PROGRAM_ID: string;
  BARK_TOKEN_ADDRESS: string;
}

interface PaymentConfig {
  SOLANA_PAY_URL: string;
  SOLANA_PAYMENT_GATEWAY_PUBLIC_KEY: string;
  SOLANA_PAYMENT_REFERENCE_KEY: string;
}

// API URLs for external services
export const API_URLS: ApiUrls = {
  JUPYTER_SWAP: 'https://api.jupiter.com/swap', // Example URL
  METADATA_SERVICE: 'https://api.example.com/upload-metadata', // Replace with actual URL
  ERROR_TRACKING_SERVICE: 'https://errors.example.com/report', // Replace with actual URL
  SOLANA_PAY: '/api/solana/pay', // Endpoint for Solana payment API
};

// Solana Network Configurations
export const SOLANA_NETWORKS: SolanaNetworks = {
  DEVNET: 'devnet',
  MAINNET: 'mainnet-beta',
};

// Wallet Adapter Configurations
export const WALLET_ADAPTERS: WalletAdapters = {
  PHANTOM: 'Phantom',
  SOLFLARE: 'Solflare',
  BACKPACK: 'Backpack',
};

// Colors for consistent styling
export const COLORS: Colors = {
  GREY: '#6B7280',
  LIGHT_GREY: '#9CA3AF',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREEN: '#10B981',
  BLUE: '#3B82F6',
  SAND: '#CBB5A7',
};

// Font Styles
export const FONTS: Fonts = {
  TITLE: 'Oswald, sans-serif',
  BODY: 'Poppins Light, sans-serif',
  SPECIAL: 'Syne, sans-serif',
};

// Badge Types for UI elements
export const BADGE_TYPES: BadgeTypes = {
  NEW: 'New',
  ESSENTIAL: 'Essential',
  POPULAR: 'Popular',
};

// Token Information
export const TOKEN_INFO: TokenInfo = {
  TOKEN_PROGRAM_ID: 'TokenkegQfeZyiNwAJbNbGKPFXkQd5J8X8wnF8MPzYx',
  NFT_PROGRAM_ID: 'gEb7nD9yLkau1P4uyMdke9byJNrat61suH4vYiPUuiR',
  BARK_TOKEN_ADDRESS: '2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg',
};

// Default Wallet Address
export const DEFAULT_WALLET_ADDRESS = 'gEb7nD9yLkau1P4uyMdke9byJNrat61suH4vYiPUuiR';

// Payment Configurations, including Solana payment service settings
export const PAYMENT_CONFIG: PaymentConfig = {
  SOLANA_PAY_URL: process.env.SOLANA_PAY_URL || '',  // Base URL for Solana payment service
  SOLANA_PAYMENT_GATEWAY_PUBLIC_KEY: process.env.SOLANA_PAYMENT_GATEWAY_PUBLIC_KEY || '',  // Public key for payment gateway
  SOLANA_PAYMENT_REFERENCE_KEY: process.env.SOLANA_PAYMENT_REFERENCE_KEY || '',  // Reference key for payment transactions
};
