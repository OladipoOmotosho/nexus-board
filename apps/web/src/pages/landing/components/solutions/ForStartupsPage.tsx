import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Rocket,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  DollarSign,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ScrollProgress } from "../ScrollProgress";
import { LandingNavbar } from "../nav/LandingNavbar";

const features = [
  {
    icon: Zap,
    title: "Move Fast",
    description:
      "Ship products faster with streamlined workflows built for speed and agility.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Generous free tier and startup-friendly pricing that scales with your growth.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Keep your growing team aligned with real-time collaboration tools.",
  },
  {
    icon: Target,
    title: "Focus on What Matters",
    description:
      "Spend time building your product, not managing project tools.",
  },
  {
    icon: TrendingUp,
    title: "Scale Seamlessly",
    description:
      "Start small, grow big. Our platform grows with your startup journey.",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get your team up and running in minutes, not days.",
  },
];

const stats = [
  { value: "5K+", label: "Startups using Nexus" },
  { value: "$2M+", label: "Funding raised by users" },
  { value: "3x", label: "Faster time to market" },
];

const benefits = [
  "Free for early-stage teams up to 10 members",
  "No credit card required to start",
  "Startup-friendly pricing that grows with you",
  "Access to our startup community",
  "Exclusive resources and templates",
  "Priority support for funded startups",
];

export default function ForStartupsPage() {
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
        {/* Subtle background */}
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/50 rounded-full text-sm"
            >
              <Rocket className="size-4 text-primary" />
              <span className="font-medium">For Startups</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                Scale your team{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">efficiently</span>
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
                Built for fast-moving startups. Focus on building your product
                while we handle the project management.
              </p>
            </motion.div>

            {/* CTAs */}
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
                Talk to founders
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
            >
              {stats.map((stat, i) => (
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
              Built for startup speed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything fast-growing teams need to stay organized and ship
              quickly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Startup-friendly benefits
            </h2>
            <p className="text-xl text-muted-foreground">
              We support early-stage startups with tools and pricing that make
              sense
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
              {benefits.map((benefit, idx) => (
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

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-2xl border border-border/50 p-12 md:p-16 text-center relative overflow-hidden bg-muted/30"
        >
          <div className="relative z-10">
            <Sparkles className="size-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Ready to scale?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of startups using Nexus Board to move faster and
              ship better products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
                Start free trial
                <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border/50 rounded-lg hover:bg-muted transition-colors text-base font-medium">
                Schedule demo
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Free forever for teams under 10. No credit card required.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
