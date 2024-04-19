"use client";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

const startAnimation: MotionProps = {
  initial: {
    scaleY: 0.1,
    opacity: 0,
    y: 20,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transformOrigin: "bottom left",
    y: 0,

    transition: {
      duration: 0.5,

      type: "spring",
      stiffness: 120,
      bounce: true,
    },
  },
};

const type: MotionProps = {
  initial: {
    width: "100%",
  },
  animate: {
    width: ["100%", "0%", "0%", "0%", "100%"],
    transition: {
      delay: 6,
      duration: 1,
      times: [0, 0.25, 0.5, 0.75, 1],
      repeat: Infinity,
      repeatDelay: 5.5,
    },
  },
};
const type2: MotionProps = {
  onAnimationComplete: () => {
    console.log("animation complete");
  },
  initial: {
    width: "100%",
  },
  animate: {
    width: ["100%", "100%", "0%", "100%", "100%"],
    transition: {
      delay: 6,
      duration: 1,
      times: [0, 0.25, 0.5, 0.75, 1],
      repeat: Infinity,
      repeatDelay: 5.5,
    },
  },
};
const MainText = () => {
  const [txtone, setOne] = useState("Make");
  const [txttwo, setTwo] = useState("Sense.");

  const txt1 = ["Hello", "Make", "Hola", "Drink"];
  const txt2 = ["Free", "Sense", "Sense", "Hola"];
  function changeText() {
    let idx = 0;
    setInterval(() => {
      if (idx <= 2) {
        setOne(txt1[idx]);
        setTwo(txt2[idx]);
        idx++;
        return;
      }
      idx = 0;
      setOne(txt1[0]);
      setTwo(txt2[0]);
    }, 6500);
  }
  useEffect(() => {
    changeText();
  }, []);
  return (
    <div>
      <motion.h2
        {...startAnimation}
        className="text-8xl font-extrabold w-[400px]"
      >
        We <br />
        <motion.span
          onAnimationComplete={() => console.log("animation completed")}
          className="inline-block overflow-hidden"
          {...type2}
          onAnimationEnd={() => {
            console.log("Animation end");
          }}
        >
          {txtone}
        </motion.span>
        <br />
        <motion.span {...type} className="inline-block overflow-hidden">
          {txttwo}
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default MainText;
