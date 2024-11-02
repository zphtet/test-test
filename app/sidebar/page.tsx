"use client";
import { Variants } from "framer-motion";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const SideBarPage = () => {
  const [open, setOpen] = useState(false);

  const parent: Variants = {
    open: {
      width: "auto",
      paddingInline: "20px",
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    close: {
      width: 0,
      paddingInline: "0px",
      transition: {
        staggerDirection: -1,
        staggerChildren: 0.2,
        when: "afterChildren",
      },
    },
  };

  const child: Variants = {
    open: {
      x: 0,
    },
    close: {
      x: -100,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="w-[400px] h-[60vh] bg-yellow-400 ml-[50px] flex flex-col">
      <p>Hello World</p>
      <div className="flex  flex-1">
        <div className="flex flex-col border-orange-100 border">
          <AlignLeft
            onClick={() => setOpen(!open)}
            className="block  cursor-pointer outline-double"
          />
          <motion.div className="flex-1 pr-10 bg-yellow-400">
            <motion.ul
              className="menu space-y-5 py-5 bg-yellow-400 p-2 h-full overflow-hidden *:overflow-hidden"
              variants={parent}
              initial="close"
              animate={open ? "open" : "close"}
            >
              <motion.li variants={child}>link one</motion.li>
              <motion.li variants={child}>link two</motion.li>{" "}
              <motion.li variants={child}>link three</motion.li>
              <motion.li variants={child}>link four</motion.li>
            </motion.ul>
          </motion.div>
        </div>
        <div className="flex-1 bg-red-400"></div>
      </div>
    </div>
  );
};

export default SideBarPage;
