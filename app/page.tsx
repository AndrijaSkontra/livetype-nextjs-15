"use client";
import InGame from "@/app/components/in-game";
import PostGameCard from "@/app/components/post-game-card";
import ReadyToJoinCard from "@/app/components/ready-to-join-card";
import LobbyCard from "@/app/components/room-details";
import { useGameRoomStateContext } from "@/app/context/game-room-state-context";
import { GameRoomState } from "@/app/types";

export default function Home() {
  const gameRoomStateContext = useGameRoomStateContext();
  console.log(gameRoomStateContext.gameRoomState, " <--- context");

  if (gameRoomStateContext.gameRoomState === GameRoomState.READY_TO_JOIN) {
    return (
      <div className="p-12">
        <ReadyToJoinCard />
      </div>
    );
  }

  if (gameRoomStateContext.gameRoomState === GameRoomState.LOBBY) {
    return (
      <div className="p-12">
        <LobbyCard />
      </div>
    );
  }

  if (gameRoomStateContext.gameRoomState === GameRoomState.IN_GAME) {
    return (
      <div className="p-12">
        <InGame />
      </div>
    );
  }

  if (gameRoomStateContext.gameRoomState === GameRoomState.POST_GAME) {
    return (
      <div className="p-12">
        <PostGameCard />
      </div>
    );
  }
}
