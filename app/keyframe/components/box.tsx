"use client";
import { motion } from "framer-motion";
const Box = () => {
  return (
    <motion.div
      animate={{
        y: [null, 0, 300],
        x: [null, 400, 400],
        transition: {
          duration: 2,
          times: [0, 0.8, 1],
          ease: ["easeIn", "easeOut"],
          repeat: Infinity,
          // repeatType: "loop",
        },
      }}
      className="box"
    />
  );
};

export default Box;
