"use client";
import { MotionAdvancedProps, motion } from "framer-motion";
import { useState } from "react";

const ballVariants = {
  jump: {
    y: [0, -70],
    x: [0, 0],
    transition: {
      duration: 0.4,
      ease: ["easeOut"],

      repeat: Infinity,
      repeatType: "reverse",
    },
  },

  jumpSide: {
    y: [0, -70],
    x: [-25, 25],
    transition: {
      y: {
        duration: 0.4,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
      x: {
        duration: 0.8,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  },
};
const BallJump = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="ball-container" onClick={() => setChange((prev) => !prev)}>
      <motion.div
        // @ts-ignore
        variants={ballVariants}
        animate={change ? "jumpSide" : "jump"}
        // animate={{
        //   y: [0, -100],
        //   transition: {
        //     repeatType: "reverse",
        //     repeat: Infinity,

        //     times: [0, 1],
        //   },
        // }}
        className="ball"
      ></motion.div>
    </div>
  );
};

export default BallJump;
