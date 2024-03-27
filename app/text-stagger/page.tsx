"use client";

import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const Section = ({ children }: { children?: ReactNode }) => {
  return (
    <section
      style={{
        height: "100vh",
      }}
    >
      {children}
    </section>
  );
};
const Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {},
  },
};

const AnimateLetter = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: false });
  const control = useAnimation();
  console.log("isInView", isInView);

  useEffect(() => {
    if (isInView) {
      console.log("It should work");
      control.start("visible");
      setTimeout(() => {
        control.start("hidden");
      }, 3000);
    }
    // if (!isInView) {
    //   control.start("hidden");
    // }
  }, [isInView]);

  return (
    <motion.p
      style={{
        fontSize: "60px",
        display: "flex",
        border: "2px solid red",
        gap: "20px",
      }}
      initial="hidden"
      // animate={` ${isInView ? "visible" : "hidden"}`}
      animate={control}
      transition={{
        staggerChildren: 0.1,
        ease: "easeInOut",
      }}
      ref={ref}
    >
      {text.split("").map((letter, i) => (
        <motion.span key={i} style={{ display: "block" }} variants={Variants}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
const Page = () => {
  return (
    <div>
      <Section></Section>
      <Section>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#efefef",
          }}
        >
          <AnimateLetter text="mingalarpar" />
        </div>
      </Section>
      <Section></Section>
    </div>
  );
};

export default Page;
