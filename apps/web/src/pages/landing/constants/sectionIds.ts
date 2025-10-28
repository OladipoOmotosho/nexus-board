/**
 * Section IDs for smooth scrolling on landing page
 */
export const LANDING_SECTIONS = {
  HERO: "hero",
  FEATURES: "features",
  HOW_IT_WORKS: "how-it-works",
  STATS: "stats",
  INTEGRATIONS: "integrations",
  TESTIMONIALS: "testimonials",
  PRICING: "pricing",
  FAQ: "faq",
  CTA: "cta",
} as const;

export type SectionId =
  (typeof LANDING_SECTIONS)[keyof typeof LANDING_SECTIONS];
