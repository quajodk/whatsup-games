import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatPlayCount } from "@/lib/utils";
import { Game } from "@/lib/definitions";
import { Play, Star } from "lucide-react";
import GameInviteModal from "./GameInviteModal";

type Props = {
  game: Game;
  isSheetOpen: boolean;
  setIsSheetOpen: React.Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

const GameDetails = ({
  game,
  isSheetOpen,
  setIsSheetOpen,
  setIsModalOpen,
}: Props) => {
  const handlePlayClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{game?.name}</SheetTitle>
        </SheetHeader>
        {game && (
          <div className="mt-6 space-y-4">
            <div className="relative h-48 w-full">
              <Image
                src={game.imageUrl}
                alt={`${game.name} cover`}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <SheetDescription>
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{game.rating.toFixed(1)}</span>
                <span className="mx-2">•</span>
                <span className="font-semibold">
                  {formatPlayCount(game.playCount)}
                </span>
                <Play className="w-4 h-4 ml-1" />
              </div>
              <p>{game.description}</p>
            </SheetDescription>
            <Button className="w-full" onClick={handlePlayClick}>
              Play Game
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default GameDetails;
