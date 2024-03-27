"use client";
import { motion } from "framer-motion";

const RotateBox = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    // animate={{ x: 300 }}
    whileTap={{ scale: 1.2 }}
    drag
    className="box"
    transition={{
      duration: 1,
    }}
  />
);

export default RotateBox;
