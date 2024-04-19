import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PlayerType {
  name: string;
  hasTeam: boolean;
  teamName?: string;
}

type PlayerStoreType = {
  players: PlayerType[];
  addPlayer: (player: PlayerType) => void;
  setPlayers: (players: PlayerType[]) => void;
};

const playerStore = create<PlayerStoreType>()(
  persist(
    (set, get) => ({
      players: [],
      addPlayer: (player: PlayerType) =>
        set({ players: [...get().players, player] }),

      setPlayers: (players: PlayerType[]) => set({ players: [...players] }),
    }),
    {
      name: "players",
    }
  )
);

export default playerStore;
