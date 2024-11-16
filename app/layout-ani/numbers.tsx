import { useAnimationControls, motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const Numbers = () => {
  const [scope, animate] = useAnimate();
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      animate(0, 100, {
        duration: 1,
        ease: "circOut",
        onUpdate(latest) {
          return (scope.current.innerHTML = Math.round(latest));
        },
      });
    }
    if (!start) {
      animate(100, 0, {
        duration: 1,
        ease: "circOut",
        onUpdate(latest) {
          return (scope.current.innerHTML = Math.round(latest));
        },
      });
    }
  }, [start]);
  return (
    <div className="text-center py-10 px-10">
      <button
        onClick={() => setStart((prev) => !prev)}
        className="px-5 py-2  border bg-blue-500"
      >
        Start Animation
      </button>
      <motion.p ref={scope} className="text-3xl text-red-500">
        {scope.current?.value || 0}
      </motion.p>
    </div>
  );
};
export default Numbers;
