// app/shop/page.tsx
import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/product-card';
import { createSolanaPaymentUrl } from '@/utils/solanaPay';

const ShopPage: React.FC = () => {
  const handleBuyNow = async (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) {
      alert('Product not found');
      return;
    }
    
    try {
      const paymentUrl = await createSolanaPaymentUrl(productId, product.price);
      window.open(paymentUrl, '_blank');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Failed to initiate payment. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Shop Our Products</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onBuyNow={handleBuyNow} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
