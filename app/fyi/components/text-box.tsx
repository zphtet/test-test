"use client";
import { motion, MotionProps } from "framer-motion";

const animation: MotionProps = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: [50, 0, 0, 50],
    scaleX: [1, 1.5, 1],
    scaleY: [1, 1.2, 1],
    transformOrigin: "left top",
    opacity: [0, 1, 1, 0],
  },
  transition: {
    y: {
      duration: 14,
      times: [0, 0.14, 0.6, 1],
    },
    scaleX: {
      duration: 5,
      times: [0.4, 0.65, 1],
    },
    opacity: {
      duration: 14,
      times: [0, 0.14, 0.8, 1],
    },
    scaleY: {
      duration: 8,
      times: [0.625, 0.8125, 1],
    },
    // repeatDelay: 2,
    repeat: Infinity,
    repeatType: "loop",
  },
};

const TextBox = () => {
  return (
    <div className="py=10">
      <div className="border outline-1 outline-offset-8 w-[120px] text-center py-6 rounded-2xl bg-gray-700">
        <motion.p
          {...animation}
          className="text-6xl font-extrabold text-orange-500"
        >
          Re <br />
          sp <br />
          on <br />
          si <br /> ve
        </motion.p>
      </div>
    </div>
  );
};

export default TextBox;
