"use client";
import AuthorStateStore from "@/zustand/comments/author";
import Image from "next/image";
import Authors from "../data/author";

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const UserProfile = () => {
  const { image, name } = AuthorStateStore((state) => state.currentAuthor);
  const setCurrentAuthor = AuthorStateStore((state) => state.setCurrentAuthor);
  const changeUser = () => {
    const rdIdx = getRandomNumber(0, 3);
    setCurrentAuthor(Authors[rdIdx]);
  };
  return (
    <div className="flex flex-col items-center gap-2 max-w-max ml-auto mr-4">
      <Image
        src={`/avatars/${image}`}
        alt="user image"
        width={"30"}
        height={"30"}
        className="w-[30px] h-[30px]"
      />
      <p>{name}</p>
      <button
        onClick={changeUser}
        className="px-4 py-2 text-white bg-violet-400  rounded-md"
      >
        Change User
      </button>
    </div>
  );
};

export default UserProfile;
