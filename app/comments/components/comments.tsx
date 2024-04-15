import CommentStore from "@/zustand/comments/comment";
import { Commentt } from "../types";
import CommentItem from "./comment";
import ReplyBox from "./reply-form";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

const Comments: React.FC<{ data: Commentt[] }> = ({ data }) => {
  const comments = CommentStore((state) => state.comments);
  const childComents = (id: number) => {
    return comments.filter((child) => child.parentId === id);
  };
  const [showMore, setShowMore] = useState(0);
  return (
    <div>
      {data.map((comment) => {
        return (
          <div className="space-y-4">
            <CommentItem key={comment.text} data={comment} />
            {childComents(comment.id).length > 0 && (
              <div className="mb-6">
                {showMore === comment.id ? (
                  <MinusCircle
                    onClick={() =>
                      setShowMore((_) => {
                        return 0;
                      })
                    }
                  />
                ) : (
                  <PlusCircle
                    onClick={() =>
                      setShowMore((_) => {
                        return comment.id;
                      })
                    }
                  />
                )}
              </div>
            )}

            {showMore === comment.id && (
              <div className="pl-8" key={comment.text}>
                {childComents(comment.id).length > 0 && (
                  <Comments
                    key={comment.text}
                    data={childComents(comment.id).reverse()}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
      {/* <ReplyBox /> */}
    </div>
  );
};

export default Comments;
