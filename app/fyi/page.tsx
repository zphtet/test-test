import { Heart } from "lucide-react";
import TextBox from "./components/text-box";
import LikeHeart from "./components/like";
import Box from "./components/box";
import TextBoxTwo from "./components/text-box-two";
import Range from "./components/range";
import SVG from "./components/svg";
const Fyi = () => {
  return (
    <div className="py-10 max-w-[700px] mx-auto">
      Fyi
      <div className="flex justify-evenly">
        <TextBox />
        <TextBoxTwo />
      </div>
      <LikeHeart />
      <Box />
      <Range />
      <SVG />
    </div>
  );
};

export default Fyi;
