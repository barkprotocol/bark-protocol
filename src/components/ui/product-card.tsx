// components/ui/product-card.tsx
import React from 'react';
import { Product } from '@/data/products';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        <Link href={`/shop/${product.id}`}>
          <a className="mt-4 inline-block bg-black-500 text-white py-2 px-4 rounded-lg hover:bg-black-600">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
