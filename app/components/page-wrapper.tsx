"use client";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default PageTransitionWrapper;
