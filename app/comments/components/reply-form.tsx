import Image from "next/image";
import { Commentt } from "../types";
import React, { Dispatch, SetStateAction, useState } from "react";
import CommentStore from "@/zustand/comments/comment";
import AuthorStateStore from "@/zustand/comments/author";
type ReplyBoxProps = {
  data: Partial<Commentt>;
  name: string;
  closeForm: () => void;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const ReplyBox: React.FC<ReplyBoxProps> = ({ data, name, closeForm }) => {
  const { id } = data;
  const [comment, setComment] = useState("");
  const addComment = CommentStore((state) => state.addComment);
  const currentUser = AuthorStateStore((state) => state.currentAuthor);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() === "") {
      return;
    }
    const newComment = {
      text: `@${name} - ${comment}`,
      authorId: currentUser.id,
      parentId: id!,
      top: false,
      score: 0,
      createAt: new Date(),
      postId: 1,
      id: getRandomNumber(0, 99999),
    };

    addComment(newComment);
    setComment("");
    closeForm();
    // setComment(comment);
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  return (
    <div
      className="p-4 bg-slate-100 rounded-xl grid grid-cols-[auto_1fr_auto] gap-2 sm:grid-rows-[1fr_auto]
       sm:gap-y-4
      "
    >
      <Image
        src={`/avatars/${currentUser.image}`}
        alt="user image"
        className="w-[30px] h-[30px] sm:row-start-2"
        width={30}
        height={30}
      />
      <form
        onSubmit={submitHandler}
        className=" sm:row-start-1 sm:col-span-full block "
      >
        <textarea
          onChange={onChange}
          value={comment}
          className="w-full  min-h-[100px] rounded-lg focus-within:outline-violet-500"
        ></textarea>
      </form>
      <div className="sm:col-start-3">
        <button
          onClick={submitHandler}
          className="  block rounded-lg cursor-pointer outline-none border-none bg-violet-400 px-4 py-2 text-white"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ReplyBox;
