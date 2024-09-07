// pages/api/solana/pay.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId, totalPrice } = req.body;

  // Basic validation
  if (!productId || !totalPrice || isNaN(totalPrice)) {
    return res.status(400).json({ success: false, message: 'Invalid input data' });
  }

  try {
    // Simulate a Solana Pay interaction (replace with actual API call)
    const qrCodeURL = `https://example.com/solana-pay-qr?amount=${totalPrice}`; // Generate QR code URL

    res.status(200).json({
      success: true,
      qrCodeURL,
      message: 'Payment initiation successful. Scan the QR code to complete payment.',
    });
  } catch (error) {
    console.error('Error in Solana Pay API:', error);
    res.status(500).json({
      success: false,
      message: 'Error initiating payment. Please try again.',
    });
  }
}
