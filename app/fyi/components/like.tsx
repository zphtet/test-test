"use client";
import { motion, useAnimationControls } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const MotionHeart = motion(Heart);

const LikeHeart = () => {
  const control = useAnimationControls();
  const [isLiked, setLiked] = useState(false);
  useEffect(() => {
    if (isLiked) {
      control.start({
        scale: [1, 2, 1],
        transition: {
          duration: 1,
        },
      });
    }
  }, [isLiked]);
  return (
    <div className="p-20">
      <MotionHeart
        animate={control}
        onClick={() => {
          console.log("cliecked");
          setLiked((prev) => !prev);
        }}
        className={`cursor-pointer ${isLiked ? "fill-red-400" : "fill-white"}`}
      />
    </div>
  );
};

export default LikeHeart;
