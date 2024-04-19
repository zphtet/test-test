"use client";

import playerStore from "@/zustand/teams/players";
import TeamStore from "@/zustand/teams/teams";
import Link from "next/link";
import shallow from "zustand/shallow";
const Page = () => {
  const teams = TeamStore((state) => state.teams);
  const deleteTeam = TeamStore((state) => state.deleteTeam);
  const players = playerStore((state) => state.players);
  const setPlayers = playerStore((state) => state.setPlayers);
  const deletThisTeam = (name: string) => {
    deleteTeam(name);
    const copyPlayers = [...players];
    const newPlayers = copyPlayers.filter((player) => player.teamName !== name);
    console.log("new players: ", newPlayers);
    setPlayers(newPlayers);
  };
  return (
    <div className="max-w-[600px] mx-auto py-6 px-4 my-10">
      <h1>All Teamas</h1>

      <Link href={"/nba-team"}>Back to Home</Link>

      <div className="space-y-3 py-10">
        {teams.map((team) => {
          return (
            <div className="card px-4 py-4 bg-blue-200 rounded-md">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl">{team.name}</h2>
                <button
                  onClick={() => deletThisTeam(team.name)}
                  className="px-4 py-1 rounded-md bg-red-700 text-white"
                >
                  delete
                </button>
              </div>
              <div className="flex items-center gap-4">
                <p>{team.region}</p>
                <p className="bg-blue-800 text-sm px-4 py-1 text-white rounded-md">
                  {team.country}
                </p>
                <p>{team.max_count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
