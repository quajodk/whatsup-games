import { Game } from "./definitions";

export const games: Game[] = [
  {
    id: Math.random().toString(36).substring(7),
    name: "Elden Ring",
    rating: 4.8,
    playCount: 1000000,
    imageUrl: "/placeholder.svg?height=200&width=400",
    description:
      "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "The Legend of Zelda: Breath of the Wild",
    rating: 4.9,
    playCount: 2500000,
    imageUrl: "/placeholder.svg?height=200&width=400",
    description:
      "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "Red Dead Redemption 2",
    rating: 4.7,
    playCount: 3000000,
    imageUrl: "/placeholder.svg?height=200&width=400",
    description:
      "Red Dead Redemption 2 is a western-themed action-adventure game developed and published by Rockstar Games.",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "God of War",
    rating: 4.8,
    playCount: 1800000,
    imageUrl: "/placeholder.svg?height=200&width=400",
    description:
      "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "Hades",
    rating: 4.9,
    playCount: 500000,
    imageUrl: "/placeholder.svg?height=200&width=400",
    description:
      "Hades is a roguelike action dungeon crawler developed and published by Supergiant Games.",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "Cyberpunk 2077",
    rating: 4.5,
    playCount: 2000000,
    imageUrl: "/placeholder.svg?height=200&width=400",
    description:
      "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt.",
  },
];

export const activityLog = [
  { id: 1, player: "You", action: "moved a piece", timestamp: "2 mins ago" },
  {
    id: 2,
    player: "Opponent",
    action: "captured your pawn",
    timestamp: "1 min ago",
  },
  {
    id: 3,
    player: "You",
    action: "moved your knight",
    timestamp: "30 secs ago",
  },
  {
    id: 4,
    player: "Opponent",
    action: "moved their bishop",
    timestamp: "Just now",
  },
];
