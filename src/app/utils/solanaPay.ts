// utils/solanaPay.ts
export const initiatePayment = async (productId: string, totalPrice: number) => {
    try {
      const response = await fetch('/api/solana/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, totalPrice }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      return {
        success: result.success,
        qrCodeURL: result.qrCodeURL,
        message: result.message || 'Payment initiated successfully.',
      };
    } catch (error) {
      console.error('Payment initiation failed:', error);
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      };
    }
  };
  