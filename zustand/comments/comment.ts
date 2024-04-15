import { Commentt } from "@/app/comments/types";
import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";
type CommentStateType = {
  comments: Commentt[];
  addComment: (comment: Commentt) => void;
  deleteComment: (id: number) => void;
  editComment: (id: number, updateFields: Partial<Commentt>) => void;
  setComments: (comments: Commentt[]) => void;
};

const CommentStore = create<CommentStateType>()(
  persist(
    (set) => ({
      comments: [],
      setComments: (comments: Commentt[]) => set({ comments }),
      addComment: (commentt: Commentt) => {
        set((state) => {
          const copyComments = [...state.comments];
          copyComments.push(commentt);
          return {
            comments: copyComments,
          };
        });
      },

      deleteComment: (id: number) => {
        set((state) => ({
          comments: state.comments.filter(
            (comment: Commentt) => comment.id !== id
          ),
        }));
      },
      editComment: (id: number, updateFields: Partial<Commentt>) => {
        set((state) => ({
          comments: state.comments.map((comment) =>
            comment.id === id ? { ...comment, ...updateFields } : comment
          ),
        }));
      },
    }),
    {
      name: "comments",
      // storage : createJSONStorage(()=> )
    }
  )
);

export default CommentStore;
