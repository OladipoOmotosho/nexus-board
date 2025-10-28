import { useRef } from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { Button } from "../../components/reusableComponents/button";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { LandingNavbar } from "./components/LandingNavbar";
import { BentoGrid } from "./components/BentoGrid";
import { HowItWorks } from "./components/HowItWorks";
import { IntegrationsSection } from "./components/IntegrationSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { FloatingCTA } from "./components/FloatingCTA";
import { BackToTop } from "./components/BackToTop";
import { useNavigate } from "react-router-dom";
import { features, stats, testimonials } from "./data/landingPageMockData";
import { LANDING_SECTIONS } from "./constants/sectionIds";
import { HeroSection } from "./components/HeroSection";
import { FadeInSection } from "./components/FadeInSection";
import { SCALE_IN_CTA, statsItemWithDelay } from "./constants/animations";
import { SectionHeader } from "./components/SectionHeader";
import { FeatureCard } from "./components/FeatureCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { Footer } from "./components/Footer";

export function LandingPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScrollProgress />
      <LandingNavbar />

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} opacity={opacity} />

      {/* Bento Grid */}
      <BentoGrid />

      {/* How It Works */}
      <section id={LANDING_SECTIONS.HOW_IT_WORKS}>
        <HowItWorks />
      </section>

      {/* Features Grid */}
      <section id={LANDING_SECTIONS.FEATURES} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Built for how you work"
            description="Everything you need to manage projects and ship faster"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        id={LANDING_SECTIONS.STATS}
        className="py-16 px-6 border-y border-border/50"
      >
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  {...statsItemWithDelay(idx * 0.1)}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-semibold mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Integrations */}
      <section id={LANDING_SECTIONS.INTEGRATIONS}>
        <IntegrationsSection />
      </section>

      {/* Testimonials */}
      <section id={LANDING_SECTIONS.TESTIMONIALS} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Trusted by world-class teams"
            description="See what teams are saying about Nexus Board"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id={LANDING_SECTIONS.PRICING}>
        <PricingSection />
      </section>

      {/* FAQ */}
      <section id={LANDING_SECTIONS.FAQ}>
        <FAQSection />
      </section>

      {/* CTA Section */}
      <section id={LANDING_SECTIONS.CTA} className="py-24 px-6">
        <FadeInSection>
          <div className="max-w-4xl mx-auto rounded-2xl border border-border/50 p-12 md:p-16 text-center relative overflow-hidden bg-muted/30">
            <div className="relative z-10">
              <motion.div {...SCALE_IN_CTA}>
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                  Ready to ship faster?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of teams building better products with Nexus
                  Board.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                  >
                    Talk to sales
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                  Free for 14 days. No credit card required.
                </p>
              </motion.div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating CTA & Back to Top */}
      <FloatingCTA />
      <BackToTop />
    </div>
  );
}
