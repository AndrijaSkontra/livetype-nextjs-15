"use client";
import { Button } from "@/components/ui/button";
import { io } from "socket.io-client";

type Props = {};

export default function ConnectButton({}: Props) {
  function connectToSocketServer() {
    console.log("Connecting to the server...");
    const connection = io(process.env.NEXT_PUBLIC_SOCKETS_URL);
  }
  return (
    <div>
      <Button onClick={connectToSocketServer}>Connect</Button>
    </div>
  );
}
