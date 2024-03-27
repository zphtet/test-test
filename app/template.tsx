"use client";
// import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
// const Template = ({ children }: { children: ReactNode }) => {
//   return (
//     <div>
//       <p>Hello this is template</p>
//       <AnimatePresence mode="wait">
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 100,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             ease: "easeIn",
//           }}
//           exit={{
//             opacity: 0,
//             x: -100,
//           }}
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

import { ReactNode } from "react";

// export default Template;

const Template = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Template;
