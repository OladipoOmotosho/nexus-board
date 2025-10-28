import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/reusableComponents/button";
import { AnimatedBlob } from "./AnimatedBlob";
import AnimatedProductPreview from "./AnimatedProductPreview";
import { trustedBy } from "../data/landingPageMockData";
import {
  HERO_LEFT_COLUMN,
  HERO_RIGHT_COLUMN,
  FADE_IN_HEADING,
  fadeInParagraph,
  fadeInButtonGroup,
  fadeInTrustedSection,
} from "../constants/animations";
import { useNavigate } from "react-router-dom";
import { useScrollToSection } from "../../../hooks/useScrollToSection";
import { LANDING_SECTIONS } from "../constants/sectionIds";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement | null>;
  opacity: any;
}

export function HeroSection({ heroRef, opacity }: HeroSectionProps) {
  const navigate = useNavigate();
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id={LANDING_SECTIONS.HERO}
      ref={heroRef}
      className="relative pt-32 pb-24 px-6 overflow-hidden"
    >
      <AnimatedBlob />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div {...HERO_LEFT_COLUMN(opacity)} className="space-y-6">
          <motion.h1
            {...FADE_IN_HEADING}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
          >
            Better project tracking
            <br />
            <span className="text-muted-foreground">for modern teams</span>
          </motion.h1>

          <motion.p
            {...fadeInParagraph(0.1)}
            className="text-lg md:text-xl text-muted-foreground max-w-lg"
          >
            Collaborate effortlessly with lightning-fast boards and ship faster
            than ever before.
          </motion.p>

          <motion.div
            {...fadeInButtonGroup(0.2)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              onClick={() => navigate("/sign_up")}
              className="text-base h-11 px-6"
            >
              Get started
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-11 px-6 border-border/50"
              onClick={() => scrollToSection(LANDING_SECTIONS.PRICING)}
            >
              See pricing
            </Button>
          </motion.div>

          <motion.div {...fadeInTrustedSection} className="flex flex-col gap-3">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center gap-6 opacity-70">
              {trustedBy.map((company) => (
                <span
                  key={company}
                  className="text-sm font-medium text-foreground/80"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div {...HERO_RIGHT_COLUMN} className="hidden md:block">
          <AnimatedProductPreview />
        </motion.div>
      </div>
    </section>
  );
}
