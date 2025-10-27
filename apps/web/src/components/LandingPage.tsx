import React, { useEffect, useRef, useState } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  Shield,
  Globe,
  Layout,
} from "lucide-react";
import { LandingNavbar } from "./LandingNavbar";
import { BentoGrid } from "./BentoGrid";
import { HowItWorks } from "./HowItWorks";
import { IntegrationsSection } from "./IntegrationSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { FloatingCTA } from "./FloatingCTA";
import { BackToTop } from "./BackToTop";

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function LandingPage({ onGetStarted, onSignIn }: LandingPageProps) {
  const heroRef = useRef(null);
  // Track scroll progress on the hero so we can fade it out on scroll.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const features = [
    {
      icon: Layout,
      title: "Intuitive Boards",
      description: "Visualize your workflow with drag-and-drop kanban boards",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together in real-time with your entire team",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with modern web technologies",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track progress and make data-driven decisions",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Access your projects from any device, anywhere",
    },
  ];

  const trustedBy = ["Stripe", "Vercel", "GitHub", "Notion", "Linear", "Figma"];

  const stats = [
    { value: "10K+", label: "Teams" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
  ];

  const testimonials = [
    {
      quote:
        "Nexus Board has become essential to how we ship. The simplicity is what makes it powerful.",
      author: "Sarah Chen",
      role: "Engineering Lead",
      company: "Vercel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "Finally, a project tool that doesn't get in the way. Our team moves faster than ever.",
      author: "Mike Johnson",
      role: "Product Manager",
      company: "Linear",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      quote:
        "The focus on speed and clarity makes all the difference. We can't imagine working without it.",
      author: "Emma Wilson",
      role: "Design Director",
      company: "Figma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScrollProgress />
      <LandingNavbar onGetStarted={onGetStarted} onSignIn={onSignIn} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden"
      >
        {/* Animated background shapes */}
        <AnimatedBlob />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left column with heading and CTA */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
            >
              Better project tracking
              <br />
              <span className="text-muted-foreground">for modern teams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              Collaborate effortlessly with lightning-fast boards and ship faster
              than ever before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="lg"
                onClick={onGetStarted}
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
                See pricing
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
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

          {/* Right column with product preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <HeroBoardPreview />
          </motion.div>
        </div>
      </section>

      {/* Remove separate AnimatedProductPreview since it is incorporated in hero */}

      {/* Bento Grid */}
      <BentoGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                Built for how you work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage projects and ship faster
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FadeInSection key={feature.title} delay={idx * 0.1}>
                <Card className="p-6 hover:shadow-md hover:border-border transition-all group cursor-pointer border-border/50 h-full">
                  <div className="size-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-border/50">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
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
      <IntegrationsSection />

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                Trusted by world-class teams
              </h2>
              <p className="text-lg text-muted-foreground">
                See what teams are saying about Nexus Board
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <FadeInSection key={testimonial.author} delay={idx * 0.15}>
                <Card className="p-6 hover:shadow-lg hover:border-border transition-all h-full border-border/50">
                  <p className="mb-6 text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="size-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection onGetStarted={onGetStarted} />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 px-6">
        <FadeInSection>
          <div className="max-w-4xl mx-auto rounded-2xl border border-border/50 p-12 md:p-16 text-center relative overflow-hidden bg-muted/30">
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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
                    onClick={onGetStarted}
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
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-8 rounded-lg bg-foreground flex items-center justify-center">
                  <span className="text-background font-semibold text-sm">
                    N
                  </span>
                </div>
                <span className="text-lg font-semibold">Nexus Board</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                The issue tracker that helps teams ship faster.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Nexus Board. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <FloatingCTA onGetStarted={onGetStarted} />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}

// Utility component for fade-in animations
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Animated Product Preview Component
function AnimatedProductPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* VERSION 1: Dashboard Mockup - ACTIVE */}
          <div className="relative bg-border/30 rounded-2xl p-1 shadow-2xl">
            <div className="bg-background rounded-xl overflow-hidden border border-border">
              {/* Browser chrome */}
              <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/20" />
                  <div className="size-3 rounded-full bg-yellow-500/20" />
                  <div className="size-3 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground border border-border/50">
                    app.nexusboard.com/projects
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-to-br from-background via-muted/5 to-background p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="h-3 w-32 bg-foreground/80 rounded mb-2" />
                    <div className="h-2 w-48 bg-muted-foreground/30 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-20 bg-primary/10 rounded-lg" />
                    <div className="h-8 w-8 bg-muted rounded-lg" />
                  </div>
                </div>

                {/* Kanban Board */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((col) => (
                    <div key={col} className="space-y-3">
                      <div className="h-2 w-16 bg-muted-foreground/40 rounded mb-4" />
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: col * 0.1 + item * 0.05,
                          }}
                          className="bg-card border border-border rounded-lg p-3"
                        >
                          <div className="h-2 w-full bg-foreground/70 rounded mb-2" />
                          <div className="h-2 w-3/4 bg-muted-foreground/30 rounded mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full bg-primary/20" />
                            <div className="h-1.5 w-12 bg-muted rounded" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VERSION 2: Abstract Illustration - COMMENTED OUT
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl" />
            <div className="relative bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-12">
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="h-3 w-32 bg-primary/60 rounded" />
                  <div className="h-2 w-48 bg-muted-foreground/40 rounded" />
                  <div className="h-2 w-40 bg-muted-foreground/40 rounded" />
                  
                  <div className="pt-4 space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <div className="h-2 flex-1 bg-muted-foreground/30 rounded" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-background/50 border border-border/50 rounded-lg p-3">
                      <div className="h-2 w-full bg-foreground/60 rounded mb-2" />
                      <div className="h-2 w-2/3 bg-muted-foreground/30 rounded" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          */}

          {/* Floating indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.4, delay: 0.6 }}
            className="absolute -top-4 -left-4 bg-background border border-border rounded-xl px-4 py-2 shadow-lg"
          >
            <div className="flex items-center gap-2 text-sm">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium">Live updates</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.4, delay: 0.8 }}
            className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl px-4 py-2 shadow-lg"
          >
            <div className="flex items-center gap-2 text-sm">
              <Users className="size-4 text-blue-500" />
              <span className="font-medium">8 collaborators</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Board preview used in the hero section. This component renders a simple
// kanban-style mockup with three columns and a few cards. It reuses design
// tokens for backgrounds, borders and spacing to stay consistent with the
// landing page aesthetic. It is intentionally static to keep the hero
// lightweight and avoid overuse of gradients.
function HeroBoardPreview() {
  return (
    <div className="relative">
      <div className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-2xl shadow-xl p-4">
        {/* Browser chrome mockup */}
        <div className="bg-muted/30 px-4 py-2 border-b border-border rounded-t-xl flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-red-500/30" />
            <div className="size-2.5 rounded-full bg-yellow-500/30" />
            <div className="size-2.5 rounded-full bg-green-500/30" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/40 rounded-md px-3 py-1 text-[10px] text-muted-foreground border border-border/50 w-40">
              nexusboard.app
            </div>
          </div>
        </div>
        {/* Simple kanban board */}
        <div className="bg-muted/20 p-4 rounded-b-xl">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((col) => (
              <div key={col} className="space-y-3">
                <div className="h-2 w-16 bg-primary/30 rounded" />
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-card border border-border rounded-lg p-3"
                  >
                    <div className="h-2 w-full bg-primary/40 rounded mb-2" />
                    <div className="h-1.5 w-3/4 bg-muted-foreground/30 rounded" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
