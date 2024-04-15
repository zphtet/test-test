"use client";
import CommentStore from "@/zustand/comments/comment";
import Comments from "./components/comments";
import UserProfile from "./components/user-profile";
import { useEffect } from "react";
import initialComments from "@/app/comments/data/comments";
const Page = () => {
  const comments = CommentStore((state) => state.comments)?.filter(
    (comment) => comment.top === true
  );
  const setComments = CommentStore((state) => state.setComments);

  useEffect(() => {
    const localComments = JSON.parse(localStorage.getItem("comments")!).state
      .comments;
    const hasLocal = localComments.length > 0;
    setComments(hasLocal ? localComments : initialComments);
  }, []);
  console.log("top comments", comments);
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-2 py-10">
      <UserProfile />
      Comments Page
      <Comments data={comments} />
    </div>
  );
};

export default Page;
