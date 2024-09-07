import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlertIcon } from "lucide-react";

export function DevnetAlert() {
  return (
    <Alert variant="caution" className="flex items-center space-x-3 p-4">
      <TriangleAlertIcon className="h-5 w-5 text-caution" aria-hidden="true" />
      <div className="flex flex-col">
        <AlertTitle className="font-semibold">Devnet ONLY</AlertTitle>
        <AlertDescription>
          This action is configured to run on Solana&apos;s devnet network. 
          Please ensure your wallet is set to devnet when testing this transaction.
        </AlertDescription>
        <div className="mt-2 text-sm text-gray-600">
          <p>Network: <strong>Devnet</strong></p>
        </div>
      </div>
    </Alert>
  );
}
