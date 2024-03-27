import { useState } from "react";
import { MoveUp } from "lucide-react";
import { motion } from "framer-motion";
const Item = ({
  text,
  arrNum,
  fun,
}: {
  text: number;
  arrNum: number;
  fun: () => void;
}) => {
  //   const [arrow, setArrow] = useState(true);
  const hasArr = text === arrNum;
  return (
    <>
      <motion.div
        onClick={fun}
        style={{
          position: "relative",
          padding: "10px 50px",
          border: "1px solid black",
          borderRadius: "5px ",
          cursor: "pointer",
        }}
      >
        <p>{text}</p>
        {hasArr && (
          <motion.div
            layoutId="arrow"
            style={{
              position: "absolute",
              paddingTop: "20px",
            }}
            transition={{
              duration: 1,
            }}
          >
            <MoveUp
            //   style={{
            //     position: "absolute",
            //     bottom: "-70%",
            //     left: "50%",
            //     transform: "translateX(-50%)",
            //   }}
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

const SelectableList = () => {
  const [arrNum, setArrNum] = useState(1);
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "50px",
        display: "flex",
        gap: "30px",
      }}
    >
      {[1, 2, 3, 4, 5].map((num) => (
        <Item
          key={num}
          arrNum={arrNum}
          fun={() => setArrNum(num)}
          text={num}
        ></Item>
      ))}
    </div>
  );
};

export default SelectableList;
