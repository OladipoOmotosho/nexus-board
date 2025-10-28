import React from "react";
import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-hero-gradient-from via-hero-gradient-via to-hero-gradient-to origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
