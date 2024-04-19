import { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TeamStore from "@/zustand/teams/teams";
interface IFormInput {
  name: string;
  region: string;
  country: string;
  count: number;
}
const CreateForm = () => {
  const {
    formState: { errors },
    watch,
    handleSubmit,
    register,
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      region: "",
      country: "",
      count: 0,
    },
  });

  const addTeam = TeamStore((state) => state.addTeam);

  const submitHandler: SubmitHandler<IFormInput> = (data) => {
    console.log("data", data);
    addTeam({
      name: data.name,
      region: data.region,
      country: data.country,
      max_count: data.count,
    });

    alert("successfully added team!");
  };
  console.log("errors", errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col *:text-red-600 space-y-4 *:rounded-sm *:px-4 *:py-1 *:text-sm"
      >
        <input
          type="text"
          {...register("name", {
            required: true,
            maxLength: {
              value: 10,
              message: "Name is too long",
            },
          })}
          placeholder="Team Name"
        />
        <ErrorMessage
          name="name"
          errors={errors}
          as={"span"}
          className="text-red-500"
        />
        <input
          type="text"
          placeholder="Region"
          {...register("region", {
            minLength: {
              value: 3,
              message: "min lenght is 3",
            },
          })}
        />
        <ErrorMessage
          name="region"
          errors={errors}
          as={"span"}
          className="text-red-500"
        />
        <input
          type="text"
          placeholder="Country"
          {...register("country", {
            required: true,
            minLength: {
              value: 3,
              message: "Country must be at least 3 characters",
            },
          })}
        />
        <ErrorMessage
          name="country"
          errors={errors}
          as={"span"}
          className="text-red-500"
        />
        <input
          type="number"
          placeholder="Your Max Size"
          {...register("count", {
            min: {
              value: 5,
              message: "at least 5",
            },
            max: {
              value: 10,
              message: "at least 10",
            },
            onBlur: () => console.log("SHould show err"),
          })}
        />
        <ErrorMessage
          name="count"
          errors={errors}
          as={"span"}
          className="text-red-500"
        />

        <button className="bg-white rounded-sm text-blue-500">Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
