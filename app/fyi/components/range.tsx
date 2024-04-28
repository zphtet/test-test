"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

const Range = () => {
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, {
    // bounce: 100,
    stiffness: 1000,
    damping: 10,
    // mass: 0.5,
    // velocity: 50,
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };
  return (
    <div className="p-10 flex gap-11 flex-col">
      <div>
        <motion.button
          style={{ scale: scaleSpring }}
          className="px-4 py2 rounded-md bg-violet-600 text-white"
        >
          sclae me
        </motion.button>
      </div>

      <input
        type="range"
        onChange={onChangeHandler}
        min={0.5}
        max={5}
        step={0.1}
      />
    </div>
  );
};
export default Range;
