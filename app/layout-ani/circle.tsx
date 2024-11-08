import { motion } from "framer-motion";
import { useState } from "react";

const Circle = () => {
  const [large, setLarge] = useState(false);
  return (
    <div className="py-10 px-10">
      <motion.div
        layout
        style={{
          width: large ? "200px" : "100px",
          height: large ? " 200px" : "100px",
        }}
        className="bg-orange-400 px-5 py-5"
      >
        <motion.div
          layout
          className="w-10 h-10 rounded-full bg-black"
        ></motion.div>
      </motion.div>
      <button
        onClick={() => setLarge(!large)}
        className="px-5 py-2 bg-blue-300 rounded-full cursor-pointer"
      >
        toggle large
      </button>
    </div>
  );
};
export default Circle;
