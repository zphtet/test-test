"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const CharItem = ({
  text,
  progress,
  range,
}: {
  text: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span
      style={{
        display: "block",
        opacity: opacity,
        width: text === " " ? "7px" : "auto",
      }}
    >
      {text}
    </motion.span>
  );
};

const Character = ({ text }: { text: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 0.7", "1 0.5"],
  });
  // const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  useEffect(() => {
    // scrollYProgress.on((e) => console.log(e));
    scrollYProgress.on("change", (e) => {
      console.log(e);
    });
  }, []);

  const chars = text.trim().split("");

  return (
    <div
      style={{
        minHeight: "100vh",
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.p
        ref={targetRef}
        className="char-para"
        style={{
          fontSize: "30px",
          border: "1px solid blue",
          display: "flex",
          flexWrap: "wrap",
          columnGap: "2px",
          // opacity: opacity,
        }}
      >
        {chars.map((char, i) => {
          const start = i / chars.length;
          const end = start + 1 / chars.length;
          return (
            <CharItem
              range={[start, end]}
              progress={scrollYProgress}
              key={i}
              text={char}
            />
          );
        })}
      </motion.p>
    </div>
  );
};

export default Character;
