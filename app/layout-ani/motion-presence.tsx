import { useAnimate, useInView, usePresence, motion } from "framer-motion";
import { useEffect } from "react";
const MotionPresence = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    amount: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
    if (!isInView) {
      animate(scope.current, { opacity: 0 });
    }
  }, [isInView]);
  return (
    <div className="flex items-center justify-center  py-10 bg-red-500">
      <motion.ul
        initial={{ opacity: 0 }}
        className="px-5 py-5 bg-orange-400"
        ref={scope}
      >
        <li>Hello one</li>
        <li>Hello two</li>
        <li>Hello three</li>
        <li>Hello four</li>
        <li>Hello five</li>
      </motion.ul>
    </div>
  );
};

export default MotionPresence;
