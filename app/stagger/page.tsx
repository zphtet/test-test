"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const avatarListVariants: Variants = {
  out: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
};

const avatarVariants: Variants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -20,
  },
};

const AnimatedAvatarList = () => {
  return (
    <div>
      <motion.ul
        initial="out"
        animate="in"
        transition={{
          delayChildren: 1,
          staggerChildren: 0.5,
        }}
        variants={avatarListVariants}
        className="p-4 w-full h-44 flex gap-4 items-center bg-gradient-to-r from-blue-400 to-pink-400"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
          return (
            <motion.li
              variants={avatarVariants}
              key={i}
              className="w-[50px] h-[50px] bg-blue-500"
            >
              HELLO
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default AnimatedAvatarList;
