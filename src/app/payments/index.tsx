import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { createPaymentRequest, checkPaymentStatus } from '@/utils/solanaPay';
import QRCode from 'qrcode.react';

const PaymentPage: React.FC = () => {
  const [paymentURL, setPaymentURL] = useState<string | null>(null);
  const [reference, setReference] = useState<PublicKey | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  const handleCreatePayment = async () => {
    try {
      const recipient = new PublicKey('recipientPublicKeyHere'); // Replace with actual recipient address
      const label = 'Payment for Service';
      const message = 'Payment for the recent service';
      const memo = 'Service1234';

      if (amount <= 0) {
        alert('Please enter a valid amount.');
        return;
      }

      const url = await createPaymentRequest(
        recipient,
        amount,
        label,
        message,
        memo
      );

      setPaymentURL(url);
      // Generate a unique reference here (could be a database ID or unique identifier)
      setReference(new PublicKey('generatedPublicKeyHere')); // Replace with actual reference
    } catch (error) {
      console.error('Error creating payment request:', error);
    }
  };

  const handleCheckStatus = async () => {
    if (!reference) return;

    setLoading(true);
    try {
      const isValid = await checkPaymentStatus(reference);
      setStatus(isValid ? 'Payment confirmed' : 'Payment not confirmed');
    } catch (error) {
      console.error('Error checking payment status:', error);
      setStatus('Error checking payment status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Payments Page</h1>
      <div className="text-center mb-8">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium mb-2">Amount (SOL)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            min="0.01"
            step="0.01"
          />
        </div>
        <button
          onClick={handleCreatePayment}
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors mb-4"
        >
          Create Payment Request
        </button>
        {paymentURL && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Scan QR Code to Complete Payment</h2>
            <QRCode value={paymentURL} />
          </div>
        )}
        {paymentURL && (
          <button
            onClick={handleCheckStatus}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Checking Status...' : 'Check Payment Status'}
          </button>
        )}
        {status && (
          <p className="text-xl mt-4">{status}</p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
