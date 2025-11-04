import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Globe,
  ArrowRight,
  Video,
  MessageSquare,
  Clock,
  Wifi,
  Calendar,
  FileText,
  CheckCircle2,
  Home,
  Briefcase,
  Users,
  DollarSign,
  BarChart3,
  Layers,
  Sparkles,
} from "lucide-react";
import { ScrollProgress } from "../ScrollProgress";
import { LandingNavbar } from "../nav/LandingNavbar";

// ============================================================================
// FOR REMOTE TEAMS PAGE
// ============================================================================

const remoteFeatures = [
  {
    icon: Video,
    title: "Async-First Tools",
    description:
      "Work across time zones with video messages, threaded discussions, and status updates.",
  },
  {
    icon: Clock,
    title: "Timezone Support",
    description:
      "Automatic timezone detection and scheduling that works for everyone.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description:
      "Instant messaging and video calls when you need synchronous communication.",
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Work without internet and sync when you're back online.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Schedule tasks and meetings that respect everyone's working hours.",
  },
  {
    icon: FileText,
    title: "Documentation Hub",
    description:
      "Centralized knowledge base accessible to the entire distributed team.",
  },
];

const remoteStats = [
  { value: "100%", label: "Remote teams" },
  { value: "85+", label: "Countries" },
  { value: "24/7", label: "Collaboration" },
];

const remoteBenefits = [
  "Works seamlessly across all time zones",
  "Mobile apps for iOS and Android",
  "Reliable performance on any connection speed",
  "Async video and voice messages",
  "Flexible notification settings",
  "Meeting-free collaboration tools",
];

export function ForRemoteTeamsPage() {
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);

  const featuresInView = useInView(solutionsRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScrollProgress />
      <LandingNavbar />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/50"
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary/2 via-transparent to-primary/3" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm"
            >
              <Home className="size-4 text-primary" />
              <span className="font-medium">For Remote Teams</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                Work from{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">anywhere</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M1 8.5C50 3 100 1 150 2.5C200 4 250 6.5 299 8.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Purpose-built for distributed teams. Collaborate effectively
                across time zones and stay connected wherever you are.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] text-base font-medium shadow-sm">
                Start for free
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
            >
              {remoteStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-semibold mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={solutionsRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Built for distributed teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools designed to keep remote teams connected, productive, and
              aligned
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remoteFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md hover:border-border transition-all"
              >
                <div className="size-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Globe className="size-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Remote-first features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for effective distributed collaboration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-4">
              {remoteBenefits.map((benefit, idx) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

{
  /* CTA Section
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: */
}
