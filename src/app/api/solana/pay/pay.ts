import type { NextApiRequest, NextApiResponse } from 'next';
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { encodeURL, createTransferInstruction } from '@solana/pay';
import qr from 'qrcode';
import Joi from 'joi'; // For input validation

type Data = {
  success: boolean;
  qrCodeURL?: string;
  message?: string;
};

const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com';
const PAYMENT_GATEWAY_PUBLIC_KEY = process.env.SOLANA_PAYMENT_GATEWAY_PUBLIC_KEY || '';
const REFERENCE_PUBLIC_KEY = process.env.SOLANA_PAYMENT_REFERENCE_KEY || '';

const connection = new Connection(SOLANA_RPC_URL, 'confirmed');

// Define the schema for validation
const paymentSchema = Joi.object({
  productId: Joi.string().required(),
  totalPrice: Joi.number().positive().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Validate request body
    const { error } = paymentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: `Invalid request parameters: ${error.details.map(detail => detail.message).join(', ')}`,
      });
    }

    const { productId, totalPrice } = req.body;

    try {
      // Create the payment request
      const qrCodeURL = await createPaymentRequest(productId, totalPrice);

      return res.status(200).json({
        success: true,
        qrCodeURL,
        message: 'Payment request created successfully.',
      });
    } catch (error) {
      console.error('Error creating payment request:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to create payment request. Please try again later.',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const createPaymentRequest = async (productId: string, totalPrice: number) => {
  try {
    // Define amount in lamports (1 SOL = 1e9 lamports)
    const amount = totalPrice * 1e9;

    // Create the transaction
    const transaction = new Transaction().add(
      createTransferInstruction(
        new PublicKey(PAYMENT_GATEWAY_PUBLIC_KEY), // Payment gateway's public key
        new PublicKey(REFERENCE_PUBLIC_KEY),       // Reference or customer public key
        amount
      )
    );

    // Encode the transaction details into a URL
    const paymentURL = encodeURL({
      recipient: new PublicKey(PAYMENT_GATEWAY_PUBLIC_KEY),
      amount,
      label: `Payment for Product ${productId}`,
      message: `Please pay ${totalPrice} SOL for product ${productId}`,
      reference: new PublicKey(REFERENCE_PUBLIC_KEY),
    });

    // Generate the QR code URL from the encoded payment URL
    const qrCodeURL = await qr.toDataURL(paymentURL);

    return qrCodeURL;
  } catch (error) {
    console.error('Error in payment request creation:', error);
    throw new Error('Failed to generate payment request.');
  }
};
