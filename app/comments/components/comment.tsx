"use client";
import { MinusSquare, PlusSquare, Reply } from "lucide-react";
import UserImg from "@/app/comments/images/avatars/image-amyrobson.png";
import Image from "next/image";
import { Commentt, User } from "../types";
import AuthorStateStore from "@/zustand/comments/author";
import { useState } from "react";
import ReplyBox from "./reply-form";
import CommentStore from "@/zustand/comments/comment";
const CommentItem: React.FC<{ data: Commentt }> = ({ data }) => {
  const { authorId, createAt, score, text } = data;
  const authors = AuthorStateStore((state) => state.authors);
  const updateComment = CommentStore((state) => state.editComment);
  const localAuthor = JSON.parse(localStorage.getItem("authors")!)?.state
    ?.authors;

  const finalAuthors = localAuthor.length > 0 ? localAuthor : authors;
  const commentAuthor = finalAuthors.find(
    (author: User) => author.id === authorId
  );
  const [showReplyForm, setShowReplyForm] = useState(false);

  const updateCount = (type: "plus" | "minus") => {
    if (type === "plus") {
      updateComment(data.id, { score: data.score + 1 });
      return;
    }
    updateComment(data.id, { score: data.score - 1 });
  };
  const date = new Date(createAt);
  const dateStr = date.toLocaleDateString();
  return (
    <>
      <div className="p-4 bg-slate-100 rounded-xl mt-6">
        <div
          className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] *:p-2
       sm:grid-rows-[auto_1fr_auto] gap-2 sm:gap-1
      "
        >
          <div className="row-span-2 sm:row-start-3  ">
            <div
              className="bg-violet-300 rounded-md py-4 px-2 space-y-2 text-center sm:flex sm:gap-2
           sm:items-center sm:p-2 sm:space-y-0
          "
            >
              <PlusSquare
                onClick={() => updateCount("plus")}
                color="#fff"
                className="cursor-pointer"
              />
              <p>{score}</p>
              <MinusSquare
                onClick={() => updateCount("minus")}
                color="#fff"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className=" sm:col-span-full flex gap-2 items-center">
            <Image
              src={`/avatars/${commentAuthor?.image}`}
              alt="user image"
              width={"30"}
              height={"30"}
              className="w-[30px] h-[30px]"
            />
            <p className="font-bold">{commentAuthor?.name}</p>
            <p className="text-[14px]">{dateStr}</p>
          </div>
          <div
            onClick={() => setShowReplyForm((prev) => !prev)}
            className="text-violet-400 cursor-pointer sm:row-start-3 sm:col-start-3 flex items-center gap-2"
          >
            <Reply />
            Reply
          </div>
          <div className=" col-span-2  sm:col-span-full text-justify hyphens-auto">
            {text}
          </div>
        </div>
      </div>
      {showReplyForm && (
        <>
          <ReplyBox
            data={data}
            name={commentAuthor?.name!}
            closeForm={() => setShowReplyForm(false)}
          />
        </>
      )}
    </>
  );
};

export default CommentItem;
