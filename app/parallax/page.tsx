"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const ImgCom = ({ src }: { src: string }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        position: "relative",
      }}
    >
      <Image alt="img" fill src={`/images/${src}`} />
    </div>
  );
};

const ImgContainer = ({
  images,
  y,
  types,
}: {
  images: string[];
  y?: MotionValue<number>;
  types: 1 | 2 | 3;
}) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        width: "28%",
        y,
        transform: `translateY(${types === 1 && "-50%"})`,
      }}
    >
      {images.map((img) => {
        return <ImgCom src={img} key={img} />;
      })}
    </motion.div>
  );
};

const ParallaxPage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["1 0.9", "1 0"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  console.log("y", y);
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          overflow: "hidden",
        }}
        ref={targetRef}
      ></div>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          // backgroundColor: "blue",
          justifyContent: "space-between",
          padding: "20px",
          border: "1px solid blue",
          overflow: "hidden",
        }}
      >
        <ImgContainer
          images={["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg"]}
          y={y}
          types={1}
        />
        <ImgContainer
          images={["img-5.jpg", "img-6.jpg", "img-7.jpg", "img-8.jpg"]}
          y={y2}
          types={2}
        />
        <ImgContainer
          images={["img-9.jpg", "img-10.jpg", "img-11.jpg", "img-12.jpg"]}
          types={3}
        />
      </div>
      <div
        style={{
          minHeight: "100vh",
        }}
      ></div>
    </>
  );
};

export default ParallaxPage;
