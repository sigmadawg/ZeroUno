import Image from "next/image";
import ConnectWallet from "../components/ConnectWallet";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <h1>Hello!</h1>
      ) : (
        <>
          <h1>Welcome to Uno on Starknet!</h1>
          <p>Please log in using your Starknet wallet</p>
          <ConnectWallet onLoginSuccess={handleLoginSuccess} />
        </>
      )}
    </div>
  );
}