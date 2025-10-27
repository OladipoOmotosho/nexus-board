import React, { useEffect, useRef, useState } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { AnimatedBlob } from "./AnimatedBlob";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  Shield,
  Sparkles,
  Globe,
  Clock,
  Target,
  Layout,
  PenTool,
  MessageSquare,
  Star,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LandingPage({ onGetStarted, onSignIn }: LandingPageProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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

  const useCases = [
    {
      icon: "💻",
      label: "Software",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: "📦",
      label: "Product",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: "📢",
      label: "Marketing",
      color: "from-pink-500/20 to-pink-600/20",
    },
    {
      icon: "🎯",
      label: "Project Mgmt",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: "🎨",
      label: "Design",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      icon: "⚙️",
      label: "IT",
      color: "from-green-500/20 to-green-600/20",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Teams" },
    { value: "50K+", label: "Projects" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      quote:
        "Nexus Board transformed how our team works. We're 3x more productive.",
      author: "Sarah Chen",
      role: "CEO, TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "The best project management tool we've ever used. Simple yet powerful.",
      author: "Mike Johnson",
      role: "Product Manager, StartupXYZ",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      quote:
        "Clean interface, great features. Our entire company runs on Nexus Board.",
      author: "Emma Wilson",
      role: "CTO, InnovateLabs",
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
        className="relative pt-32 pb-20 px-6 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <AnimatedBlob />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 20% 50%, var(--hero-gradient-from) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, var(--hero-gradient-via) 0%, transparent 50%)`,
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(var(--color-foreground) / 0.05) 1px, transparent 0)",
              backgroundSize: "50px 50px",
              y,
            }}
          />
        </div>

        <motion.div
          style={{ opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="size-3 mr-1.5" />
              Introducing Nexus Board 2.0
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
          >
            From{" "}
            <span
              className="relative inline-block"
              style={{
                background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              teams
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.path
                  d="M0 6 Q 100 0, 200 6"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="var(--hero-gradient-from)" />
                    <stop offset="100%" stopColor="var(--hero-gradient-via)" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>{" "}
            to dreams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            The AI-powered project management platform that helps teams ship
            faster, collaborate better, and achieve their goals effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={onGetStarted}
              className="text-lg h-12 px-8"
            >
              Get started for free
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-12 px-8">
              Watch demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            No credit card required • Free 14-day trial • Cancel anytime
          </motion.p>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={useCase.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${useCase.color} backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center cursor-pointer transition-all`}
              >
                <div className="text-3xl mb-2">{useCase.icon}</div>
                <p className="text-sm font-medium">{useCase.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Animated Product Preview */}
      <AnimatedProductPreview />

      {/* Bento Grid */}
      <BentoGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Features Grid */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">
                Everything you need to succeed
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to help your team work smarter, not
                harder
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FadeInSection key={feature.title} delay={idx * 0.1}>
                <Card className="p-6 hover:shadow-lg transition-all group cursor-pointer border-border/50 hover:border-primary/20">
                  <div className="size-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-primary/0">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-semibold mb-2 bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
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
              <h2 className="text-4xl md:text-5xl mb-4">
                Loved by teams worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of teams already using Nexus Board
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <FadeInSection key={testimonial.author} delay={idx * 0.2}>
                <Card className="p-6 hover:shadow-lg transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-lg">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="size-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
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
          <div
            className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
            style={{
              background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via), var(--hero-gradient-to))`,
            }}
          >
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute size-2 bg-white/20 rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                  }}
                  animate={{
                    y: [null, "-100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl text-white mb-6">
                  Ready to transform your workflow?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams already using Nexus Board to ship
                  faster and collaborate better.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      onClick={onGetStarted}
                      className="text-lg h-12 px-8"
                    >
                      Start free trial
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg h-12 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
                    >
                      Contact sales
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="size-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, var(--hero-gradient-from), var(--hero-gradient-via))`,
                  }}
                >
                  <span className="text-white font-semibold">N</span>
                </div>
                <span className="text-xl font-semibold">Nexus Board</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                The modern project management platform built for teams who want
                to ship faster.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
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
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
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
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Nexus Board. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
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
    <section ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-hero-gradient-from/20 via-hero-gradient-via/20 to-hero-gradient-to/20 rounded-3xl blur-3xl" />
          <div className="relative bg-card border border-border rounded-2xl p-4 shadow-2xl">
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzYxNTM3NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Product preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-8 -left-8 bg-card border border-border rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-green-500" />
              <span className="font-medium">Task completed</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-8 -right-8 bg-card border border-border rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Users className="size-5 text-blue-500" />
              <span className="font-medium">3 team members online</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
