import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return isConnected ? (
    <div>
      <p>Connected: {address}</p>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  ) : (
    <button onClick={() => connect()}>Connect Wallet</button>
  );
}

export default ConnectButton;
