import React, { useState } from "react";
import { motion, Variants, LayoutGroup, AnimatePresence } from "framer-motion";
import { ArrowBigLeft, Trash } from "lucide-react";

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
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const AnimatedNotificationList = () => {
  const [hoverItem, setHoverItem] = useState<number | null>(null);
  const [itemList, setItemList] = useState(() => notiList);

  const handleOnHover = (itemId: number) => setHoverItem(itemId);
  const handleRemove = (itemId: number) => {
    const updatedNotiList = itemList.filter((noti) => noti.id !== itemId);
    setItemList(updatedNotiList);
  };

  return (
    <>
      <AnimatePresence>
        <div className="p-8 bg-gradient-to-r from-blue-400 to-cyan-300 min-h-svh">
          <motion.div
            className="w-1/2"
            initial="hidden"
            animate="visible"
            variants={notiListVariants}
          >
            <p className="mb-4 text-2xl antialiased font-semibold text-sky-800">
              အန်နီမိတ်တက် တန်ဖိုးရှိလှသော စကားများ
            </p>
            <motion.ul className="space-y-2">
              <LayoutGroup>
                {itemList.length > 0 ? (
                  itemList.map((noti, i) => (
                    <motion.li
                      layout
                      key={noti.id}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="flex items-center gap-4 group"
                    >
                      <motion.div
                        className="flex items-center justify-between p-4 bg-white rounded shadow hover:cursor-pointer"
                        variants={notiItemVariants}
                        onMouseEnter={() => handleOnHover(noti.id)}
                        onMouseOver={() => handleOnHover(noti.id)}
                      >
                        <div className="flex items-center justify-between gap-10">
                          <div className="flex items-center">
                            {i + 1}.{" "}
                            <p className="text-teal-900">{noti.message}</p>
                          </div>
                          <div onClick={() => handleRemove(noti.id)}>
                            <Trash stroke="red" />
                          </div>
                        </div>
                      </motion.div>
                      {noti.id === hoverItem ? (
                        <motion.div layoutId="arrow">
                          <ArrowBigLeft size={44} fill="#fff" stroke="#fff" />
                        </motion.div>
                      ) : null}
                    </motion.li>
                  ))
                ) : (
                  <p>မရှိသေးပါ</p>
                )}
              </LayoutGroup>
            </motion.ul>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedNotificationList;
