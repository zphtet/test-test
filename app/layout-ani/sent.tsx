import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
const SentAni = () => {
  const [isExpand, setExpand] = useState(false);
  return (
    <div className=" bg-blue-300">
      <div className="pr-20 relative w-[400px] bg-red-300 flex">
        <input
          //   style={{
          //     display: isExpand ? "none" : "block",
          //   }}
          type="text"
          className="border  py-2 rounded-full flex-1"
        />
        <motion.button
          onClick={() => setExpand(!isExpand)}
          layout
          style={{
            width: isExpand ? "100%" : "auto",
          }}
          className="px-5 h-full bg-orange-300 rounded-full text-black absolute top-0 right-0 w-20"
        >
          <motion.span className="text-center block">
            <Send />
          </motion.span>
          {/* {isExpand && (
            <motion.span
              initial={{ opacity: 0, x: "50%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center block"
            >
              <Send />
            </motion.span>
          )} */}
        </motion.button>
      </div>
    </div>
  );
};
export default SentAni;
