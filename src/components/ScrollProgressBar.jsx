/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.1,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 origin-left z-50"
      style={{
        scaleX,
        opacity: 0.8,
        filter: "drop-shadow(0 0 16px rgba(129,140,248,0.6))",
      }}
    />
  );
}
