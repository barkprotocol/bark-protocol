// data/products.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    currency: string;
    category: string;
    stock: number;
    type: 'NFT' | 'Membership'; // Added type for differentiating product types
  }
  
export const products: Product[] = [
    {
      id: '1',
      name: 'BARK NFT 1',
      description: 'Exclusive BARK NFT with unique artwork.',
      price: 1,
      imageUrl: '/images/nft1.jpg',
      currency: 'SOL',
      category: 'NFTs',
      stock: 10,
      type: 'NFT',
    },
    {
      id: '2',
      name: 'BARK NFT 2',
      description: 'Another exclusive BARK NFT with rare traits.',
      price: 2,
      imageUrl: '/images/nft2.jpg',
      currency: 'SOL',
      category: 'NFTs',
      stock: 5,
      type: 'NFT',
    },
    // Add more NFTs here
    {
      id: '3',
      name: 'BARK Membership Gold',
      description: 'Gold membership tier with exclusive benefits.',
      price: 3,
      imageUrl: '/images/membership_gold.jpg',
      currency: 'SOL',
      category: 'Memberships',
      stock: 20,
      type: 'Membership',
    },
    {
      id: '4',
      name: 'BARK Membership Silver',
      description: 'Silver membership tier with standard benefits.',
      price: 4,
      imageUrl: '/images/membership_silver.jpg',
      currency: 'USD',
      category: 'Memberships',
      stock: 30,
      type: 'Membership',
    },
    // Add more Memberships here
    // Ensure you have a total of 8 products
];
