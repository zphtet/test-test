import playerStore from "@/zustand/teams/players";
import TeamStore from "@/zustand/teams/teams";
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInput = {
  teamName: string;
};
const AddForm = ({ name }: { name: string }) => {
  const teams = TeamStore((state) => state.teams);
  const addPlayer = playerStore((state) => state.addPlayer);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addPlayer({
      hasTeam: true,
      name: name,
      teamName: data.teamName,
    });
    alert("Add player to the team");
  };
  return (
    <div>
      <h1>ADD This Player to Team</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-red-600"
      >
        <h3 className="text-3xl">{name}</h3>
        <select {...register("teamName")} className="min-w-[400px]">
          {teams.map((team) => {
            return (
              <option key={team.name} value={team.name}>
                {team.name}
              </option>
            );
          })}

          {/* <option value="male">male</option>
          <option value="other">other</option> */}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddForm;
