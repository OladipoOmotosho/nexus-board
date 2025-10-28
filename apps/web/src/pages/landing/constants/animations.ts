/**
 * Reusable animation variants and transitions for landing page
 */

import { MotionProps } from "motion/react";

export const EASING = {
  default: [0.22, 1, 0.36, 1],
} as const;

export const TRANSITIONS = {
  fast: {
    duration: 0.4,
    ease: EASING.default,
  },
  normal: {
    duration: 0.6,
    ease: EASING.default,
  },
  slow: {
    duration: 0.8,
    ease: EASING.default,
  },
} as const;

// Hero left column with scroll fade
export const HERO_LEFT_COLUMN = (opacity: any) => ({
  style: { opacity },
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: EASING.default },
});

// Hero right column
export const HERO_RIGHT_COLUMN = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: EASING.default },
} as const;

// Fade in heading
export const FADE_IN_HEADING = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: TRANSITIONS.normal,
} as const;

// Fade in paragraph with delay
export const fadeInParagraph = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { ...TRANSITIONS.normal, delay },
});

// Fade in button group with delay
export const fadeInButtonGroup = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { ...TRANSITIONS.normal, delay },
});

// Fade in trusted companies section
export const fadeInTrustedSection = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay: 0.3 },
} as const;

// Scale up animation for CTA sections
export const SCALE_IN_CTA = {
  initial: { scale: 0.95, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: TRANSITIONS.fast,
} as const;

// Floating card animation with delay
export const floatInWithDelay = (delay: number) => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { ...TRANSITIONS.fast, delay },
});

// Product preview animation
export const PRODUCT_PREVIEW = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: TRANSITIONS.slow,
} as const;

// Fade in section (for intersection observer)
export const FADE_IN_SECTION = {
  initial: { opacity: 0, y: 40 },
  transition: { duration: 0.8, ease: EASING.default },
} as const;

// Stats item animation
export const STATS_ITEM = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: TRANSITIONS.fast,
} as const;

export const statsItemWithDelay = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { ...TRANSITIONS.fast, delay },
});
