import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const links = [
    "Google",
    "Facebook",
    "Twitter",
    "YouTube",
    "Amazon",
    "Alibaba",
  ];

  const parent: Variants = {
    open: {
      width: "auto",
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    close: {
      width: 0,
      transition: {
        staggerDirection: -1,
        staggerChildren: 0.2,
        when: "afterChildren",
      },
    },
  };

  const child: Variants = {
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="fixed  top-0 left-1/2 -translate-x-1/2">
      {/* <p>hello this is navigation</p> */}
      <AnimatePresence>
        <motion.footer
          layout
          className=" px-5 py-2 text-white bg-orange-300 w-max  mx-auto "
          animate={{
            borderRadius: "10px",
          }}
        >
          {showLinks && (
            <motion.div
              variants={parent}
              layout
              initial="close"
              animate="open"
              exit="close"
              className="w-full px-5 py-2 grid grid-cols-2 gap-5"
            >
              {links.map((link) => {
                return (
                  <motion.p
                    layout
                    variants={child}
                    key={link}
                    className="block px-10 border border-black py-2 rounded-md"
                  >
                    {link}
                  </motion.p>
                );
              })}
            </motion.div>
          )}
          <div className="flex gap-5 text-white justify-center">
            <motion.button className="block" layout>
              About
            </motion.button>
            <motion.button
              className="block"
              layout
              onClick={() => setShowLinks(!showLinks)}
            >
              Porfolio
            </motion.button>
            <motion.button className="block" layout>
              Contact Us
            </motion.button>
          </div>
        </motion.footer>
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
