import { useRef, ReactNode } from "react";
import { useInView } from "motion/react";
import { ScrollProgress } from "../ScrollProgress";
import { LandingNavbar } from "./LandingNavbar";

interface NavWrapperProps {
  children: ReactNode;
}

export function NavWrapper({ children }: NavWrapperProps) {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScrollProgress />
      <LandingNavbar />
      <div
        data-hero-ref={heroRef}
        data-features-ref={featuresRef}
        data-features-in-view={featuresInView}
      >
        {children}
      </div>
    </div>
  );
}

export function useNavWrapperContext() {
  return {
    createHeroRef: () => useRef(null),
    createFeaturesRef: () => useRef(null),
  };
}
