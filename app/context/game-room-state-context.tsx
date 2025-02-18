"use client";

import { GameRoomState } from "@/app/types";
import { createContext, ReactNode, useContext, useState } from "react";

type GameRoomContextType = {
  gameRoomState: GameRoomState;
  setGameRoomState: (val: GameRoomState) => void;
};

const GameRoomStateContext = createContext<GameRoomContextType | null>(null);

export const GameRoomStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [gameRoomState, setGameRoomState] = useState(GameRoomState.IN_GAME);

  return (
    <GameRoomStateContext.Provider
      value={{
        setGameRoomState: setGameRoomState,
        gameRoomState: gameRoomState,
      }}
    >
      {children}
    </GameRoomStateContext.Provider>
  );
};

export const useGameRoomStateContext = () => {
  const context = useContext(GameRoomStateContext);
  if (!context) {
    throw new Error("GameRoomState context must be used within an Provider");
  }
  return context;
};
