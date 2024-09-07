import React from 'react';
import { Product } from '@/data/products';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
        <p className="text-xl font-bold text-black dark:text-white">
          ${product.price.toFixed(2)}
        </p>
        <Link href={`/shop/${product.id}`} passHref>
          <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
