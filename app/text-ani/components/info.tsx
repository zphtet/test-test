"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const InfoText = () => {
  const [text, setText] = useState(
    " We create different ideas for different brands"
  );

  const endHandler = () => {
    console.log("end handler");
  };

  const Texts = [
    "We create different ideas for different brands",
    "Hello this is the second text different brands",
    "I am using framer motion and other techs .....",
    "I am creating such a beautiful animation .....",
  ];

  function changeText() {
    let idx = 1;
    setInterval(function () {
      if (idx <= 3) {
        setText(Texts[idx]);

        idx++;
        return;
      }
      idx = 0;
      setText(Texts[0]);
    }, 6500);
  }

  useEffect(() => {
    console.log("use effect working");
    changeText();
  }, []);
  return (
    <motion.p
      className="self-center -mt-[80px] w-[400px]"
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: [-20, 0, 0],
        opacity: [0, 1, 0],
      }}
      onAnimationEnd={(e) => {
        console.log("e", e);
      }}
      transition={{
        y: {
          times: [0, 0.1, 1],
          duration: 6,
          repeatType: "loop",
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        },

        opacity: {
          times: [0, 0.15, 1],
          duration: 6,
          repeatType: "loop",
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        },
      }}
    >
      {text}
    </motion.p>
  );
};

export default InfoText;
