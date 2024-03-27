"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const TranWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1.2,
            ease: "easeInOut",
          },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="trans-layer"
        initial={{
          x: "100%",
          scaleX: 1,
        }}
        animate={{
          x: "0%",
          scaleX: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  );
};

export default TranWrapper;
