"use client";

import { Variants, motion } from "framer-motion";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const variant = {
    open: {
      opacity: 1,
      "--x": "0%",
      "--y": "0%",
    },
    close: {
      opacity: 0,
      "--x": "-100%",
      "--y": "100%",
    },
  };
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="border border-red-400 px-5 py-2 ml-5"
      >
        Open Drawer
      </button>
      <motion.div
        variants={variant}
        initial="open"
        animate={open ? "open" : "close"}
        className="drawer w-[min(400px,100%)] h-[500px] bg-orange-300 translate-x-[--x] md:translate-x-0 md:translate-y-[--y]"
      ></motion.div>
    </div>
  );
};

export default Page;
