import React from "react";
import { motion } from "motion/react";

export function AnimatedBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: `linear-gradient(135deg, var(--hero-gradient-via), var(--hero-gradient-to))`,
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: "10%", right: "10%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{
          background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-to))`,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "50%", left: "50%" }}
      />
    </div>
  );
}
