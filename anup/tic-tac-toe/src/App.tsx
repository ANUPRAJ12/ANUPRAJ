import React, { useState } from "react";
import { Client, Session } from "@heroiclabs/nakama-js";

const App = () => {
  const [session, setSession] = useState<Session | null>(null);

  const connectToServer = async () => {
    const client = new Client("defaultkey", "127.0.0.1", "7350");
    try {
      const newSession = await client.authenticateDevice("device-123");
      setSession(newSession);
      console.log("Authenticated:", newSession);
    } catch (err) {
      console.error("Authentication failed:", err);
    }
  };

  const startMatch = async () => {
    if (!session) {
      console.error("You must authenticate first.");
      return;
    }
    const client = new Client("defaultkey", "127.0.0.1", "7350");
    const result = await client.rpc(session, "start_match", {});
    console.log("Match started:", result);
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={connectToServer}>Connect to Server</button>
      <button onClick={startMatch}>Start Match</button>
    </div>
  );
};

export default App;
