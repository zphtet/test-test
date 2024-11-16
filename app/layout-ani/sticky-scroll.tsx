"use client";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
const StickyScroll = () => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    // container: containerRef,
    target: targetRef,
    offset: ["end end", "end 0.1"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-60%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  useMotionValueEvent(scrollYProgress, "change", (data) => {
    console.log("data", data);
  });
  const motionvalue = useMotionValue(scrollYProgress);
  console.log("motionValue", x);
  return (
    <div>
      <div
        className=" bg-blue-300 py-5 px-5 relative overflow-x-hidden"
        ref={containerRef}
      >
        <div className="h-[60vh]"></div>
        <motion.div
          className="text-5xl space-y-5 sticky top-10 w-[200vw] bg-orange-300"
          ref={targetRef}
        >
          <motion.p
            layout
            style={{
              x,
            }}
            className="w-full -translate-x-1/2"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            dolorum odit iste vitae debitis rem? Nisi fugit minus quis nostrum,
          </motion.p>
          <motion.p
            style={{
              x: x2,
            }}
            className="w-full"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, molestias magnam quo distinctio, necessitatibus
          </motion.p>
        </motion.div>
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default StickyScroll;
