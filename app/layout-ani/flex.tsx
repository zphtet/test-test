import { motion } from "framer-motion";
import { useState } from "react";

const FlexLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <motion.div
        layout
        style={{
          flexDirection: toggle ? "column" : "row",
        }}
        className="flex gap-5 items-center bg-blue-500/20 rounded-xl w-max px-5 py-5"
      >
        <motion.div
          layout
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "100vmax",
            backgroundColor: "orange",
          }}
        ></motion.div>
        <motion.div layout>
          <p className="text-xl">Hello World</p>
          <p className="text-sm text-black/20">this is the world we created</p>
        </motion.div>
      </motion.div>
      <div>
        <button
          onClick={() => setToggle(!toggle)}
          className="px-5 py-2 mt-20 bg-orange-300 rounded-2xl cursor-pointer"
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default FlexLayout;
