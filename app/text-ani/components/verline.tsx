"use client";
import { motion, MotionProps } from "framer-motion";
const VerticalLine = () => {
  const variants = {
    initial: { y: "-100%" },
    animate: {
      y: ["-100%", "0%", "100%"],
      transition: {
        duration: 4,
        times: [0, 0.2, 1],

        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
      },
    },
  };
  return (
    <div className="w-[3px] h-[200px] border rounded-full self-end overflow-hidden">
      <motion.div
        initial={{
          y: "-100%",
        }}
        animate={{
          y: ["-100%", "0%", "100%"],
          transition: {
            duration: 6,
            times: [0, 0, 1],

            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
          },
        }}
        className="w-full h-full bg-white"
      ></motion.div>
    </div>
  );
};

export default VerticalLine;
