import { useState } from "react";
import { motion } from "framer-motion";
import "./box.css";
const Box = () => {
  const [dir, setDir] = useState("flex-start");
  return (
    <>
      <motion.div
        className="layout-1"
        style={{
          justifyContent: dir,
        }}
      >
        <motion.div
          layout
          transition={{
            duration: 0.5,
            ease: "backInOut",
          }}
          className="layout-box"
        ></motion.div>
      </motion.div>
      <div>
        <button onClick={() => setDir("flex-start")}>start</button>
        <button onClick={() => setDir("center")}>center</button>
        <button onClick={() => setDir("flex-end")}>end</button>
      </div>
    </>
  );
};

export default Box;
