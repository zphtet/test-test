import { create } from "zustand";
import { persist } from "zustand/middleware";

type TeamType = {
  name: string;
  region: string;
  country: string;
  max_count: number;
};

type TeamStoreType = {
  teams: TeamType[];
  deleteTeam: (name: string) => void;
  addTeam: (team: TeamType) => void;
};

const TeamStore = create<TeamStoreType>()(
  persist(
    (set) => ({
      teams: [],
      deleteTeam: (name: string) => {
        set((state) => ({
          teams: state.teams.filter((team) => team.name !== name),
        }));
      },
      addTeam: (team: TeamType) =>
        set((state) => ({ teams: [...state.teams, team] })),
    }),
    {
      name: "teams",
    }
  )
);

export default TeamStore;
