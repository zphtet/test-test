"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const WordItem = ({
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
      }}
    >
      {text}
    </motion.span>
  );
};

const Word = ({ text }: { text: string }) => {
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

  const words = text.split(" ");

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
        style={{
          fontSize: "30px",
          border: "1px solid blue",
          display: "flex",
          flexWrap: "wrap",
          columnGap: "10px",
          // opacity: opacity,
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <WordItem
              range={[start, end]}
              progress={scrollYProgress}
              key={i}
              text={word}
            />
          );
        })}
      </motion.p>
    </div>
  );
};

export default Word;
