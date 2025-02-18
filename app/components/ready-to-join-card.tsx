"use client";
import {
  GameRoomContextType,
  useGameRoomStateContext,
} from "@/app/context/game-room-state-context";
import { GameRoomState } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { io } from "socket.io-client";

type Props = {};

export default function ReadyToJoinCard({}: Props) {
  const [username, setUsername] = useState<string | null>(null);
  const gameRoomStateContext = useGameRoomStateContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ready to join a game?</CardTitle>
        <CardDescription>Click Connect to start typing</CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-2">
        <Input
          type="text"
          placeholder="Username"
          value={username ?? ""}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          onClick={() =>
            handleConnect(
              username ?? "Guest" + Math.random() * 100,
              gameRoomStateContext,
            )
          }
        >
          Connect
        </Button>
      </CardContent>
    </Card>
  );
}

function handleConnect(
  username: string,
  gameRoomStateContext: GameRoomContextType,
) {
  const connection = io(process.env.NEXT_PUBLIC_SOCKETS_URL, {
    query: {
      username: username,
    },
  });

  if (connection) {
    gameRoomStateContext.setGameRoomState(GameRoomState.LOBBY);
  }

  connection.on("start01", () => {
    console.log("Game starting");
    gameRoomStateContext.setGameRoomState(GameRoomState.IN_GAME);
  });
}
