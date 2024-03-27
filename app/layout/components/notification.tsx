import { LayoutGroup, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
const Items = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const Items2 = ["item2 1", "item2 2", "item2 3", "item2 4", "item2 5"];

const Notifications = () => {
  const [notis, setNotis] = useState(Items);
  const [notis2, setNotis2] = useState(Items2);
  return (
    <div className="noti-container">
      <LayoutGroup>
        <AnimatePresence>
          {notis.map((item, index) => (
            <motion.div
              layout
              onClick={() => {
                setNotis((prev) => prev.filter((i) => i !== item));
              }}
              initial={{
                y: 150,
                x: 0,
                opacity: 0,
              }}
              animate={{
                y: 0,
                x: 0,
                opacity: 1,
              }}
              exit={{
                // opacity: 0,
                y: [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0],
                rotate: [0, -5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
                opacity: 0,
                transition: {
                  duration: 1,
                  // times: [0.5, 0.5],
                  // repeat: Infinity,
                  // delay: 0.1,
                  // ease: "easeInOut",
                },
              }}
              key={item}
              className="noti-item"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {notis2.map((item, index) => (
            <motion.div
              layout
              onClick={() => {
                setNotis2((prev) => prev.filter((i) => i !== item));
              }}
              initial={{
                y: 150,
                x: 0,
                opacity: 0,
              }}
              animate={{
                y: 0,
                x: 0,
                opacity: 1,
              }}
              exit={{
                // opacity: 0,
                y: [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0],
                rotate: [0, -5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
                opacity: 0,
                transition: {
                  duration: 1,
                  // times: [0.5, 0.5],
                  // repeat: Infinity,
                  // delay: 0.1,
                  // ease: "easeInOut",
                },
              }}
              key={item}
              className="noti-item"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

export default Notifications;
