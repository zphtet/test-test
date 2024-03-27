"use client";

import { useMotionValue, motion, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
  const museSpring = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const changeMousePos = (e: MouseEvent) => {
    mouse.x.set(e.clientX - 20 / 2);
    mouse.y.set(e.clientY - 20 / 2);
    console.log(e.clientX, e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", changeMousePos);
    return () => {
      window.removeEventListener("mousemove", changeMousePos);
    };
  }, []);
  return (
    <motion.div
      style={{
        width: "20px",
        height: "20px",
        background: "#000",
        borderRadius: "50%",
        position: "fixed",
        zIndex: 1000,
        pointerEvents: "none",
        x: museSpring.x,
        y: museSpring.y,
      }}
    ></motion.div>
  );
};

export default Cursor;
