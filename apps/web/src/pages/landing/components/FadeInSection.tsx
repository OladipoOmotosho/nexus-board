import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FADE_IN_SECTION } from "../constants/animations";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

/**
 * Utility component for fade-in animations on scroll
 * Uses intersection observer to detect when element is in view
 */
export function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={FADE_IN_SECTION.initial}
      animate={isInView ? { opacity: 1, y: 0 } : FADE_IN_SECTION.initial}
      transition={{ ...FADE_IN_SECTION.transition, delay }}
    >
      {children}
    </motion.div>
  );
}