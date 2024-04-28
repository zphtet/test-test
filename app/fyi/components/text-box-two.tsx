"use client";
import { motion, MotionProps, useAnimationControls } from "framer-motion";
import { Scale } from "lucide-react";
import { useEffect } from "react";

// type varinatType = Record<string, MotionProps>;
const varinats = {
  fadeIn: {
    y: 0,
    opacity: 1,
    transformOrigin: "top left",
    transition: {
      duration: 1,
    },
  },
  scaleX: {
    scaleX: 1.5,
    y: 0,
    transformOrigin: "left top",
    transition: {
      duration: 1,
    },
  },
  scaleY: {
    scaleY: 1.2,
    transformOrigin: "left top",
    transition: {
      duration: 1,
    },
  },
  scaleOrg: {
    scaleX: 1,
    transformOrigin: "left top",
    transition: {
      duration: 1,
    },
  },
  fadeOut: {
    scaleY: 2,
    y: 100,
    opacity: 0,
    transformOrigin: "left top",
    transition: {
      duration: 2,
    },
  },

  initial: {
    x: 0,
    y: 0,
    opacity: 0,
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const TextBoxTwo = () => {
  const control = useAnimationControls();

  useEffect(() => {
    async function animate() {
      await control.start("fadeIn");
      await control.start("scaleX");
      await control.start("scaleY");
      await control.start("scaleOrg");
      await control.start("fadeOut");
      await control.start("initial");

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("after htree seconds");
        }, 3000);
      });
      await animate();
    }
    animate();
  }, []);

  return (
    <div className="py=10">
      <div className="border overflow-hidden outline-1 outline-offset-8 w-[120px] text-center py-6 rounded-2xl bg-gray-700">
        <motion.p
          animate={control}
          variants={varinats}
          className="text-6xl font-extrabold scale-90 opacity-0 text-orange-500"
        >
          Re <br />
          sp <br />
          on <br />
          si <br /> ve
        </motion.p>
      </div>
    </div>
  );
};

export default TextBoxTwo;
