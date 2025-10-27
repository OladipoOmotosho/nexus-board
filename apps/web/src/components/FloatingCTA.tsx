import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface FloatingCTAProps {
  onGetStarted: () => void;
}

export function FloatingCTA({ onGetStarted }: FloatingCTAProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px
      setShow(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            size="lg"
            onClick={onGetStarted}
            className="shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            style={{
              background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
            }}
          >
            Get started free
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
