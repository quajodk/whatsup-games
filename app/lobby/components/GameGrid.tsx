"use client";

import { games } from "@/lib/data";
import React, { useState } from "react";
import GameCard from "./GameCard";
import { Game } from "@/lib/definitions";
import GameDetails from "./GameDetails";
import GameInviteModal from "./GameInviteModal";

type Props = {};

const GameGrid = (props: Props) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setIsSheetOpen(true);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} handleGameClick={handleGameClick} />
      ))}
      {selectedGame && (
        <>
          <GameDetails
            game={selectedGame}
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <GameInviteModal
            game={selectedGame}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </>
      )}
    </div>
  );
};

export default GameGrid;
