import { Commentt } from "../types";

const Commentts: Commentt[] = [
  {
    id: 1,
    authorId: 1,
    parentId: null,
    postId: 1,
    text: "Hola this is the best solution I have ever met",
    top: true,
    score: 0,
    createAt: new Date("march 12 2024"),
  },
  {
    id: 2,
    authorId: 2,
    parentId: 1,
    postId: 1,
    text: "I think so",
    top: false,
    score: 0,
    createAt: new Date("march 15 2024"),
  },
];

export default Commentts;
