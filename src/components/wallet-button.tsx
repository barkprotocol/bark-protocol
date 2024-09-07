import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';

export default function WalletButton() {
  const { connected, connect, disconnect, wallet } = useWallet();

  const handleClick = async () => {
    try {
      if (connected) {
        await disconnect();
      } else {
        await connect();
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
      // Optionally, you can show a notification or message to the user
    }
  };

  return (
    <Button
      onClick={handleClick}
      aria-label={connected ? `Disconnect ${wallet?.adapter.name}` : 'Connect Wallet'}
      disabled={!wallet} // Disable the button if no wallet is available
    >
      {connected ? `Disconnect ${wallet?.adapter.name}` : 'Connect Wallet'}
    </Button>
  );
}
