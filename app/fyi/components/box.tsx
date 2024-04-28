"use client";

import { motion, useAnimationControls, Variants } from "framer-motion";

const Box = () => {
  const control = useAnimationControls();
  const variants: Variants = {
    right: {
      x: 100,
    },
    bottom: {
      y: 100,
    },
    left: {
      x: 0,
    },
    up: {
      y: 0,
    },
  };
  const handleAnimation = async () => {
    console.log("hello clicked");
    await control.start("right");
    await control.start("bottom");
    await control.start("left");
    await control.start("up");
    await new Promise((resolve, _) => {
      setInterval(() => {
        resolve("after three seconds");
      }, 3000);
    });
    // for infinite looping
    await handleAnimation();
  };
  return (
    <div className="p-10">
      <button onClick={handleAnimation}>start animation</button>
      <motion.div
        animate={control}
        variants={variants}
        className="w-28 h-28 rounded-2xl bg-orange-400"
      ></motion.div>
    </div>
  );
};

export default Box;
