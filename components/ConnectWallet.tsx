import { useConnect, useDisconnect, useAccount } from "@starknet-react/core";
import { useState, useEffect } from "react";

export default function ConnectWallet({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const connector = connectors[0];

  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (address) {
      setUsername(address);
      onLoginSuccess();
    }
  }, [address, connector, onLoginSuccess]);

  return (
    <div>
      {address ? (
        <>
          <p>Connected as: {username || address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
        <button onClick={() => connect({ connector })}>Connect Wallet</button>
      )}
    </div>
  );
}
