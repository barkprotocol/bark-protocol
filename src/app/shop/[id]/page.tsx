// app/shop/[id]/page.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { products } from '@/data/products';
import { initiatePayment } from '@/utils/solanaPay';
import QRCode from 'qrcode.react';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((prod) => prod.id === id);

  const [quantity, setQuantity] = useState<number>(1);
  const [paymentStatus, setPaymentStatus] = useState<{ success: boolean; message?: string; qrCodeURL?: string }>({
    success: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!product) return;
    // Reset state when product changes
    setQuantity(1);
    setPaymentStatus({ success: false });
  }, [product]);

  if (!product) return <p>Product not found</p>;

  const handleBuyNow = async () => {
    if (quantity <= 0 || quantity > product.stock) {
      setError('Invalid quantity. Please enter a quantity within available stock.');
      return;
    }

    setError(null);
    setIsLoading(true);
    try {
      const result = await initiatePayment(product.id, product.price * quantity);
      if (result.success) {
        setPaymentStatus({ success: true, qrCodeURL: result.qrCodeURL });
      } else {
        setPaymentStatus({ success: false, message: result.message });
      }
    } catch (err) {
      setError('An error occurred while processing your payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">{product.name}</h1>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <img src={product.imageUrl} alt={product.name} className="w-64 h-64 object-cover mb-4 md:mb-0 md:mr-8 rounded-lg shadow-md" />
        <div className="text-center md:text-left">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">
            {product.currency} {product.price.toFixed(2)} per unit
          </p>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              min="1"
              max={product.stock}
            />
          </div>
          <p className="text-xl font-bold mb-4">
            Total Price: {product.currency} {totalPrice}
          </p>
          <button
            onClick={handleBuyNow}
            disabled={isLoading}
            className={`bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </button>
          {paymentStatus.success && paymentStatus.qrCodeURL && (
            <div className="mt-8 text-center">
              <h2 className="text-xl font-bold mb-4">Scan QR Code to Complete Payment</h2>
              <QRCode value={paymentStatus.qrCodeURL} />
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-500">
              {error}
            </div>
          )}
          {paymentStatus.message && !error && (
            <div className="mt-4 text-red-500">
              {paymentStatus.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
