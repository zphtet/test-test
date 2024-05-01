"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowBigLeft } from "lucide-react";

const notiList = [
  {
    id: 1,
    message: "ဟိုင်း၊ ထမင်းစားပြီးပြီလား ?",
  },
  {
    id: 2,
    message: "ဟိတ် အချောလေး",
  },
  {
    id: 3,
    message: "ပူတယ်နော် အဲ့ကရော ချစ်လား ?",
  },
  {
    id: 4,
    message: "မီးပျက်ပြန်ပြီကွာ",
  },
  {
    id: 5,
    message: "ဂျပန် မသွားသေးဘူးလား",
  },
  {
    id: 6,
    message: "ဒါဗုဒ္ဓဘာသာ မြန်မာနိုင်ငံတော်ကွ",
  },
  {
    id: 7,
    message: "တန်ဖိုးရှိလှတဲ့ မှတ်ချက်",
  },
  {
    id: 8,
    message: "ဒါမြန်မာနိုင်ငံမှာဖြစ်တာဆိုတော့ လက်ခံပေးလို့ရပါတယ်",
  },
];

const notiListVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.4,
      staggerChildren: 0.3,
      ease: "circInOut",
    },
  },
};

const notiItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedNotificationList = () => {
  const [hoverItem, setHoverItem] = useState<number | null>(null);

  const handleOnHover = (itemId: number) => setHoverItem(itemId);

  return (
    <AnimatePresence>
      <div className="p-8 bg-gradient-to-r from-blue-400 to-cyan-300">
        <motion.div
          className="w-1/2"
          initial="hidden"
          animate="visible"
          variants={notiListVariants}
        >
          <p className="mb-4 text-2xl antialiased font-semibold text-sky-800">
            Animated Notification List
          </p>
          <motion.ul className="space-y-2">
            {notiList.map((noti, i) => (
              <li className="flex items-center gap-4">
                <motion.div
                  key={i}
                  className="flex items-center gap-2 p-4 bg-white rounded shadow hover:cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    transition: { ease: "anticipate" },
                  }}
                  variants={notiItemVariants}
                  onMouseEnter={() => handleOnHover(noti.id)}
                  onMouseOver={() => handleOnHover(noti.id)}
                >
                  {i + 1}. <p className="text-teal-900">{noti.message}</p>
                </motion.div>
                {noti.id === hoverItem ? (
                  <motion.div layoutId="arrow">
                    <ArrowBigLeft size={44} fill="#fff" stroke="#fff" />
                  </motion.div>
                ) : null}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AnimatedNotificationList;
