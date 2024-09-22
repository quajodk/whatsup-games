import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/lib/definitions";
import React from "react";
import Image from "next/image";
import { Play, Star } from "lucide-react";
import { formatPlayCount } from "@/lib/utils";

type Props = {
  game: Game;
  handleGameClick: (arg: Game) => void;
};

const GameCard = ({ game, handleGameClick }: Props) => {
  return (
    <Card
      key={game.id}
      className="overflow-hidden cursor-pointer"
      onClick={() => handleGameClick(game)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={`/api/placeholder?seed=${game.id}&width=400&height=200`}
          alt={`${game.name} cover`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardTitle className="truncate">{game.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-semibold">{game.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-semibold mr-1">
              {formatPlayCount(game.playCount)}
            </span>
            <Play className="w-4 h-4" />
            <span className="sr-only">plays</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
