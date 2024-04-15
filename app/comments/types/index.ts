export type User = {
  name: string;
  id: number;
  image: string;
};

export type Post = {
  postId: number;
  title: string;
  text: string;
  authorId: number;
};

export type Commentt = {
  id: number;
  authorId: number;
  parentId: number | null;
  postId: number;
  text: string;
  top: boolean;
  score: number;
  createAt: Date;
};
