import { create } from "zustand";
import Authors from "@/app/comments/data/author";
import { User } from "@/app/comments/types";
import { persist } from "zustand/middleware";
interface AuthorStateType {
  authors: User[];
  currentAuthor: User;
  setCurrentAuthor: (author: User) => void;
}

const AuthorStateStore = create<AuthorStateType>()(
  persist(
    (set) => ({
      authors: Authors,
      currentAuthor: Authors[0],
      setCurrentAuthor: (author: User) => set({ currentAuthor: author }),
    }),
    {
      name: "authors",
    }
  )
);

export default AuthorStateStore;
