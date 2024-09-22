import LogoutButton from "@/components/common/logout";
import { getSession } from "../lib/session";
import GameGrid from "./components/GameGrid";

export default async function Lobby() {
  const session = await getSession();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Game Lobby</h1>
        <LogoutButton />
      </div>
      <div className="mb-4 space-y-2 flex flex-col">
        {session ? (
          <p className="text-lg">Welcome, {session?.name as string}!</p>
        ) : (
          <p className="text-lg">Welcome, Guest!</p>
        )}

        <p className="text-base">Select a game and enjoy with friends</p>
      </div>
      <GameGrid />
    </div>
  );
}
